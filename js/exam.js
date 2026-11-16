document.addEventListener('DOMContentLoaded', () => {
  const S = SamantaExam;
  let state = S.loadState();
  const $ = id => document.getElementById(id);
  const letters = 'ABCDE';
  const navigationDetails = $('navigationDetails');
  const mobileNavigation = window.matchMedia('(max-width: 850px)');
  function syncNavigationDisclosure() { navigationDetails.open = !mobileNavigation.matches; }
  syncNavigationDisclosure();
  mobileNavigation.addEventListener?.('change', syncNavigationDisclosure);
  if (!state || !state.started || state.delivered) {
    $('noAttempt').classList.remove('hidden');
    return;
  }
  // Ao abrir a prova pelo link, uma nova contagem sempre começa do zero.
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
    $('progressBar').setAttribute('aria-valuemax', String(QUESTIONS.length));
    $('progressBar').setAttribute('aria-valuenow', String(n));
    $('progressFill').style.width = `${n / QUESTIONS.length * 100}%`;
    document.querySelectorAll('.nav-num').forEach((b, i) => {
      const answered = state.answers[i] !== null && state.answers[i] !== undefined;
      const isCurrent = i === current;
      b.classList.toggle('answered', answered);
      b.classList.toggle('current', isCurrent);
      b.setAttribute('aria-label', `Ir para questão ${i + 1}, ${answered ? 'respondida' : 'em branco'}${isCurrent ? ', questão atual' : ''}`);
      if (isCurrent) b.setAttribute('aria-current', 'step');
      else b.removeAttribute('aria-current');
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
    if (q.promptHtml) $('questionPrompt').innerHTML = q.promptHtml;
    else $('questionPrompt').textContent = q.prompt;
    $('questionVisual').innerHTML = q.visualHtml || '';
    $('options').querySelectorAll('.option').forEach(node => node.remove());
    $('optionsLegend').textContent = `Alternativas de resposta para a questão ${q.id}`;
    q.options.forEach((opt, j) => {
      const label = document.createElement('label');
      label.className = 'option' + (draftChoice === j ? ' selected' : '') + (q.optionHtml && q.optionHtml[j] ? ' has-math-option' : '');
      const radio = document.createElement('input');
      radio.type = 'radio'; radio.className = 'option-radio'; radio.name = 'answer';
      radio.value = String(j); radio.checked = draftChoice === j;
      const letter = document.createElement('span'); letter.className = 'letter'; letter.textContent = letters[j];
      const text = document.createElement('span'); text.className = 'option-text';
      if (q.optionHtml && q.optionHtml[j]) text.innerHTML = q.optionHtml[j];
      else text.textContent = opt;
      label.append(radio, letter, text);
      radio.addEventListener('change', () => {
        if (!radio.checked) return;
        draftChoice = j;
        $('options').querySelectorAll('.option').forEach(x => x.classList.remove('selected'));
        label.classList.add('selected');
        $('saveNote').textContent = `Alternativa ${letters[j]} selecionada. Clique em “Salvar resposta”.`;
        $('saveBtn').disabled = false;
      });
      $('options').appendChild(label);
    });
    $('saveNote').textContent = state.answers[current] === null ? 'Selecione uma alternativa para salvar.' : `Resposta salva: alternativa ${letters[state.answers[current]]}. Você pode alterá-la.`;
    $('saveBtn').disabled = draftChoice === null;
    $('positionLabel').textContent = `${current + 1} de ${QUESTIONS.length}`;
    $('prevBtn').disabled = current === 0; $('nextBtn').disabled = current === QUESTIONS.length - 1;
    updateProgress(); persist();
  }
  function goTo(i) { current = i; renderQuestion(); $('questionPrompt').focus({preventScroll:true}); $('questionPrompt').scrollIntoView({behavior:'smooth', block:'center'}); }
  function saveAnswer() {
    if (draftChoice === null || draftChoice === undefined) { $('saveNote').textContent = 'Selecione uma alternativa antes de salvar.'; return; }
    state.answers[current] = draftChoice; persist();
    $('saveNote').textContent = `Resposta salva: alternativa ${letters[draftChoice]}.`;
    updateProgress(); renderQuestion();
  }
  function renderReview() {
    const list = $('reviewList'); list.innerHTML = '';
    let n = 0;
    state.answers.forEach((a, i) => {
      if (a === null || a === undefined) return;
      n++;
      const q = QUESTIONS[i];
      const item = document.createElement('li');
      const button = document.createElement('button'); button.type = 'button'; button.className = 'review-item';
      const savedChoice = q.optionSpoken && q.optionSpoken[a] ? q.optionSpoken[a] : q.options[a];
      button.setAttribute('aria-label', `Abrir questão ${q.id}. Resposta salva: alternativa ${letters[a]}, ${savedChoice}.`);
      const num = document.createElement('b'); num.textContent = `Q${i + 1}`;
      const main = document.createElement('span'); main.className = 'review-main';
      const title = document.createElement('strong'); title.textContent = `Questão ${q.id}`;
      const detail = document.createElement('small');
      detail.append(document.createTextNode(`Alternativa ${letters[a]} — `));
      if (q.optionHtml && q.optionHtml[a]) detail.insertAdjacentHTML('beforeend', q.optionHtml[a]);
      else detail.append(document.createTextNode(q.options[a]));
      main.append(title, detail);
      const status = document.createElement('span'); status.className = 'answer-status small-muted'; status.textContent = 'Salva';
      button.append(num, main, status);
      button.addEventListener('click', () => { $('reviewSection').classList.add('hidden'); $('exam').classList.remove('hidden'); goTo(i); });
      item.appendChild(button); list.appendChild(item);
    });
    $('reviewSummary').textContent = `${n} respostas salvas • ${QUESTIONS.length - n} questões em branco.`;
    if (!n) {
      const item = document.createElement('li'); item.className = 'empty';
      item.textContent = 'Nenhuma resposta foi salva até o momento.';
      list.appendChild(item);
    }
  }
  function openReview() {
    renderReview(); $('reviewSection').classList.remove('hidden');
    $('reviewSection').scrollIntoView({behavior:'smooth', block:'start'});
    $('reviewTitle').focus({preventScroll:true});
  }
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
  $('backToExamBtn').addEventListener('click', () => { $('reviewSection').classList.add('hidden'); $('exam').classList.remove('hidden'); $('exam').scrollIntoView({behavior:'smooth'}); $('questionPrompt').focus({preventScroll:true}); });
  $('deliverFromReviewBtn').addEventListener('click', deliver);
  renderNav(); renderQuestion(); updateTimer();
  clock = setInterval(() => { updateTimer(); }, 1000);
  window.addEventListener('beforeunload', () => { if (clock) clearInterval(clock); state.current = current; S.saveState(state); });
});
