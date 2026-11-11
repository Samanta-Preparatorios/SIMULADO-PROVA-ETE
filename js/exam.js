document.addEventListener('DOMContentLoaded', () => {
  const S = SamantaExam;
  let state = S.loadState();
  const $ = id => document.getElementById(id);
  if (!state || !state.started || state.delivered) {
    $('noAttempt').classList.remove('hidden');
    return;
  }
  // Toda abertura da página da prova inicia uma nova contagem de tempo.
  // As respostas previamente salvas são mantidas.
  state.startedAt = Date.now();
  state.seconds = 0;
  S.saveState(state);
  if (!Array.isArray(state.answers) || state.answers.length !== QUESTIONS.length) state.answers = Array(QUESTIONS.length).fill(null);
  let current = Math.min(Math.max(0, state.current || 0), QUESTIONS.length - 1);
  let draftChoice = state.answers[current];
  let clock = null;
  $('exam').classList.remove('hidden');
  $('examStatus').textContent = 'Prova em andamento';

  function persist() { state.current = current; S.saveState(state); }
  function answeredCount() { return state.answers.filter(x => x !== null).length; }
  function updateTimer() { $('timer').textContent = S.formatTime(S.elapsedSeconds(state)); }
  function updateProgress() {
    const n = answeredCount();
    $('progressText').textContent = `${n}/${QUESTIONS.length} respondidas`;
    $('progressFill').style.width = `${n / QUESTIONS.length * 100}%`;
    document.querySelectorAll('.nav-num').forEach((b, i) => {
      b.classList.toggle('answered', state.answers[i] !== null);
      b.classList.toggle('current', i === current);
      b.setAttribute('aria-current', i === current ? 'step' : 'false');
    });
  }
  function renderNav() {
    const grid = $('navGrid'); grid.innerHTML = '';
    QUESTIONS.forEach((q, i) => {
      const b = document.createElement('button'); b.type = 'button'; b.className = 'nav-num'; b.textContent = String(i + 1);
      b.setAttribute('aria-label', `Ir para questão ${i + 1}${state.answers[i] !== null ? ', respondida' : ', em branco'}`);
      b.addEventListener('click', () => goTo(i)); grid.appendChild(b);
    });
    updateProgress();
  }
  function renderQuestion() {
    const q = QUESTIONS[current]; draftChoice = state.answers[current];
    $('questionNumber').textContent = `QUESTÃO ${q.id}`;
    $('questionPrompt').textContent = q.prompt;
    $('questionVisual').innerHTML = q.visualHtml || '';
    $('options').innerHTML = '';
    q.options.forEach((opt, j) => {
      const b = document.createElement('button'); b.type = 'button'; b.className = 'option' + (draftChoice === j ? ' selected' : '');
      const letter = document.createElement('span'); letter.className = 'letter'; letter.textContent = ['A','B','C','D'][j];
      const text = document.createElement('span'); text.className = 'option-text'; text.textContent = opt;
      b.append(letter, text);
      b.addEventListener('click', () => {
        draftChoice = j;
        document.querySelectorAll('.option').forEach(x => x.classList.remove('selected'));
        b.classList.add('selected');
        $('saveNote').textContent = `Alternativa ${['A','B','C','D'][j]} selecionada. Clique em “Salvar resposta”.`;
        $('saveBtn').disabled = false;
      });
      $('options').appendChild(b);
    });
    $('saveNote').textContent = state.answers[current] === null ? 'Selecione uma alternativa para salvar.' : `Resposta salva: alternativa ${['A','B','C','D'][state.answers[current]]}. Você pode alterá-la.`;
    $('saveBtn').disabled = draftChoice === null;
    $('positionLabel').textContent = `${current + 1} de ${QUESTIONS.length}`;
    $('prevBtn').disabled = current === 0; $('nextBtn').disabled = current === QUESTIONS.length - 1;
    updateProgress(); persist();
  }
  function goTo(i) { current = i; renderQuestion(); $('questionPrompt').scrollIntoView({behavior:'smooth', block:'center'}); }
  function saveAnswer() {
    if (draftChoice === null || draftChoice === undefined) { $('saveNote').textContent = 'Selecione uma alternativa antes de salvar.'; return; }
    state.answers[current] = draftChoice; persist();
    $('saveNote').textContent = `Resposta salva: alternativa ${['A','B','C','D'][draftChoice]}.`;
    updateProgress(); renderQuestion();
  }
  function renderReview() {
    const list = $('reviewList'); list.innerHTML = '';
    let n = 0;
    state.answers.forEach((a, i) => {
      if (a === null) return;
      n++;
      const q = QUESTIONS[i]; const div = document.createElement('div'); div.className = 'review-item'; div.tabIndex = 0;
      const num = document.createElement('b'); num.textContent = `Q${i + 1}`;
      const main = document.createElement('div'); const title = document.createElement('strong'); title.textContent = `Questão ${q.id}`;
      const detail = document.createElement('small'); detail.textContent = `Alternativa ${['A','B','C','D'][a]} — ${q.options[a]}`;
      main.append(title, detail); const status = document.createElement('span'); status.className = 'answer-status small-muted'; status.textContent = 'Salva';
      div.append(num, main, status); div.style.cursor = 'pointer';
      div.addEventListener('click', () => { $('reviewSection').classList.add('hidden'); $('exam').classList.remove('hidden'); goTo(i); });
      div.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); div.click(); } });
      list.appendChild(div);
    });
    if (!n) list.innerHTML = '<div class="empty">Nenhuma resposta foi salva até o momento.</div>';
    const note = document.createElement('p'); note.className = 'small-muted'; note.textContent = `${n} respostas salvas • ${QUESTIONS.length - n} questões em branco.`; list.prepend(note);
  }
  function openReview() { renderReview(); $('reviewSection').classList.remove('hidden'); $('reviewSection').scrollIntoView({behavior:'smooth', block:'start'}); }
  function deliver() {
    if (!confirm('Deseja entregar suas respostas? Depois da entrega, não será mais possível alterá-las.')) return;
    state.seconds = S.elapsedSeconds(state); state.delivered = true; state.deliveredAt = Date.now(); persist();
    window.location.href = 'resultados.html';
  }
  $('saveBtn').addEventListener('click', saveAnswer);
  $('prevBtn').addEventListener('click', () => { if (current > 0) goTo(current - 1); });
  $('nextBtn').addEventListener('click', () => { if (current < QUESTIONS.length - 1) goTo(current + 1); });
  $('reviewBtn').addEventListener('click', openReview);
  $('deliverBtn').addEventListener('click', deliver);
  $('backToExamBtn').addEventListener('click', () => { $('reviewSection').classList.add('hidden'); $('exam').classList.remove('hidden'); $('exam').scrollIntoView({behavior:'smooth'}); });
  $('deliverFromReviewBtn').addEventListener('click', deliver);
  renderNav(); renderQuestion(); updateTimer();
  clock = setInterval(() => { updateTimer(); }, 1000);
  window.addEventListener('beforeunload', () => { if (clock) clearInterval(clock); state.current = current; S.saveState(state); });
});
