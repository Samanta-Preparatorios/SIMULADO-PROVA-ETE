document.addEventListener('DOMContentLoaded', () => {
  const S = SamantaExam;
  const state = S.loadState();
  const $ = id => document.getElementById(id);
  if (!state || !state.delivered) { $('noResults').classList.remove('hidden'); return; }
  $('resultsArea').classList.remove('hidden'); $('examStatus').textContent = 'Prova entregue';
  const answers = Array.isArray(state.answers) ? state.answers : Array(QUESTIONS.length).fill(null);
  const letters = ['A','B','C','D'];
  let solutionIndex = 0, showAll = false;
  function compute() {
    let correct = 0, wrong = 0, blank = 0; const by = {};
    QUESTIONS.forEach((q, i) => {
      if (!by[q.topic]) by[q.topic] = { total: 0, correct: 0, wrong: 0, blank: 0 };
      by[q.topic].total++;
      if (answers[i] === null || answers[i] === undefined) { blank++; by[q.topic].blank++; }
      else if (answers[i] === q.correct) { correct++; by[q.topic].correct++; }
      else { wrong++; by[q.topic].wrong++; }
    });
    const pct = Math.round(correct / QUESTIONS.length * 100);
    $('correctCount').textContent = correct; $('wrongCount').textContent = wrong; $('blankCount').textContent = blank;
    $('scorePercent').textContent = pct + '%';
    $('scoreDonut').style.background = `conic-gradient(var(--green) 0deg ${pct * 3.6}deg, #dedede ${pct * 3.6}deg 360deg)`;
    $('scoreDonut').setAttribute('role', 'img');
    $('scoreDonut').setAttribute('aria-label', `${correct} acertos em ${QUESTIONS.length} questões: ${pct}% de aproveitamento total.`);
    $('timeSpent').textContent = S.formatTime(state.seconds || 0);
    $('resultMessage').textContent = pct >= 80 ? 'Excelente resultado! Você demonstrou domínio consistente dos conteúdos avaliados.' : pct >= 60 ? 'Bom desempenho. Revise os conteúdos em que houve erros para consolidar a aprendizagem.' : pct >= 40 ? 'Você já possui uma base, mas precisa reforçar alguns conteúdos fundamentais. Use o plano abaixo.' : 'Este resultado indica que vale retomar conceitos fundamentais e praticar gradualmente. Use o plano abaixo como ponto de partida.';

    const rows = Object.entries(by).map(([topic, v]) => {
      const attempted = v.correct + v.wrong;
      return { topic, ...v, attempted, pct: attempted ? Math.round(v.correct / attempted * 100) : null };
    }).sort((a, b) => {
      if (a.pct === null) return b.pct === null ? a.topic.localeCompare(b.topic) : 1;
      if (b.pct === null) return -1;
      return a.pct - b.pct;
    });

    $('topicBars').innerHTML = rows.map(r => {
      const label = r.pct === null ? `Não avaliado (${r.blank}/${r.total} em branco)` : `${r.pct}% (${r.correct}/${r.attempted} respondidas)`;
      const width = r.pct === null ? 0 : r.pct;
      return `<div class="topic-row"><span>${r.topic}</span><div class="topic-track"><span style="width:${width}%"></span></div><b class="topic-stat">${label}</b></div>`;
    }).join('');

    const enoughEvidence = rows.filter(r => r.attempted >= 2);
    const best = enoughEvidence.filter(r => r.pct >= 70).sort((a, b) => b.pct - a.pct).slice(0, 5);
    const worst = enoughEvidence.filter(r => r.pct < 70).sort((a, b) => a.pct - b.pct).slice(0, 6);
    const notEnough = rows.filter(r => r.attempted < 2);
    $('strengths').innerHTML = '<h3>Mais facilidade observada</h3>' + (best.length ? '<p>' + best.map(r => `${r.topic} (${r.pct}%, ${r.correct}/${r.attempted} respostas)`).join(' • ') + '</p>' : '<p class="small-muted">Ainda não há respostas suficientes para apontar uma área de maior facilidade com segurança.</p>');
    $('weaknesses').innerHTML = '<h3>Conteúdos que merecem atenção</h3>' + (worst.length ? '<p>' + worst.map(r => `${r.topic} (${r.pct}%, ${r.correct}/${r.attempted} respostas)`).join(' • ') + '</p>' : '<p class="small-muted">Não foi identificada uma dificuldade consistente entre as áreas com pelo menos duas respostas.</p>');
    if (notEnough.length) {
      const names = notEnough.map(r => `${r.topic} (${r.attempted} respondidas; ${r.blank} em branco)`).join(' • ');
      $('weaknesses').innerHTML += `<p class="small-muted"><strong>Avaliação inconclusiva:</strong> ${names}. Responda mais questões dessas áreas para que o diagnóstico seja confiável.</p>`;
    }

    const guidance = {
      'Aritmética, frações e potências': 'Retome operações com frações e números racionais, prioridade das operações, propriedades de potências e raízes. Treine simplificação antes de calcular.',
      'Porcentagem e matemática financeira': 'Pratique aumento e desconto percentual, descontos sucessivos e fatores multiplicativos. Diferencie o percentual descontado do percentual que será pago.',
      'Razão, proporção e regra de três': 'Identifique se as grandezas são diretamente ou inversamente proporcionais. Resolva primeiro pelo valor unitário e depois confira por regra de três.',
      'Grandezas, medidas e velocidade': 'Revise conversões entre m³ e litros, mL e litros, unidades de comprimento, velocidade média e relação entre distância e tempo. Sempre unifique as unidades antes de operar.',
      'Médias e interpretação de dados': 'Diferencie média simples de média ponderada. Organize os dados em tabela, some os valores e confira a quantidade de observações e os pesos.',
      'Álgebra e sistemas': 'Traduza cada informação do enunciado para uma equação. Treine isolamento da incógnita, substituição e eliminação em sistemas de duas variáveis.',
      'Ângulos e polígonos': 'Revise ângulos correspondentes e alternos em paralelas, soma dos ângulos internos de triângulos e polígonos e fórmula do número de diagonais.',
      'Áreas, perímetros e geometria': 'Diferencie perímetro de área. Revise as fórmulas de retângulo, quadrado, trapézio e círculo, semelhança de triângulos e Teorema de Pitágoras.'
    };
    const priority = worst.slice(0, 5);
    const plan = priority.map(r => `<li><strong>${r.topic} — ${r.pct}% de acertos entre as respondidas:</strong> ${guidance[r.topic] || 'Retome os conceitos e pratique exercícios do conteúdo.'} Depois, resolva 5 questões sem consulta e confira os procedimentos.</li>`);
    if (notEnough.length) {
      plan.push(`<li><strong>Completar a avaliação:</strong> ${notEnough.map(r => r.topic).join(', ')}. Há poucas respostas para concluir se a dificuldade é conceitual ou se as questões foram deixadas em branco.</li>`);
    }
    if (!plan.length) plan.push('<li>Não houve dificuldade consistente nas áreas avaliadas. Mantenha a prática com questões mistas e revise os itens que errou.</li>');
    $('studyPlan').innerHTML = '<p><strong>Como interpretar:</strong> o percentual por conteúdo considera apenas as questões respondidas daquela área. Questões em branco são mostradas separadamente e não são automaticamente tratadas como dificuldade conceitual.</p><ol>' + plan.join('') + '</ol><p>Refaça as questões erradas depois de 48 horas, sem consultar o comentário, e compare seu desempenho.</p>';
  }
  function solutionHtml(i) {
    const q = QUESTIONS[i], a = answers[i], ok = a === q.correct;
    const chosen = a === null || a === undefined ? 'Não respondeu' : `${letters[a]} — ${q.options[a]}`;
    const correct = `${letters[q.correct]} — ${q.options[q.correct]}`;
    const article = document.createElement('article'); article.className = `panel answer-review ${a === null || a === undefined ? '' : ok ? 'correct' : 'incorrect'}`;
    const meta = document.createElement('div'); meta.className = 'answer-meta';
    [`Questão ${q.id}`, a === null || a === undefined ? 'Em branco' : ok ? 'Acertou' : 'Errou'].forEach(t => { const s = document.createElement('span'); s.textContent = t; meta.appendChild(s); });
    const h = document.createElement('h3'); h.textContent = q.prompt;
    const p1 = document.createElement('p'); p1.innerHTML = '<strong>Sua resposta:</strong> '; p1.append(document.createTextNode(chosen));
    const p2 = document.createElement('p'); p2.innerHTML = '<strong>Resposta correta:</strong> '; p2.append(document.createTextNode(correct));
    const box = document.createElement('div'); box.className = 'solution'; const b = document.createElement('b'); b.textContent = 'Resolução comentada'; const exp = document.createElement('p'); exp.textContent = q.explanation; box.append(b, exp);
    article.append(meta, h, p1, p2, box); return article;
  }
  function renderSingle() {
    $('solutionCounter').textContent = `Questão ${solutionIndex + 1} de ${QUESTIONS.length}`;
    $('singleSolution').replaceChildren(solutionHtml(solutionIndex));
    $('solutionPrev').disabled = solutionIndex === 0; $('solutionNext').disabled = solutionIndex === QUESTIONS.length - 1;
  }
  $('solutionPrev').addEventListener('click', () => { if (solutionIndex > 0) { solutionIndex--; renderSingle(); } });
  $('solutionNext').addEventListener('click', () => { if (solutionIndex < QUESTIONS.length - 1) { solutionIndex++; renderSingle(); } });
  $('toggleAllSolutions').addEventListener('click', () => {
    showAll = !showAll; $('allSolutions').classList.toggle('hidden', !showAll); $('toggleAllSolutions').textContent = showAll ? 'Ocultar todas as resoluções' : 'Mostrar todas as resoluções';
    if (showAll && !$('allSolutions').dataset.rendered) {
      const frag = document.createDocumentFragment(); QUESTIONS.forEach((q, i) => frag.appendChild(solutionHtml(i))); $('allSolutions').replaceChildren(frag); $('allSolutions').dataset.rendered = '1';
    }
  });
  $('newAttemptBtn').addEventListener('click', () => {
    if (confirm('Iniciar uma nova tentativa? O resultado atual será substituído neste navegador.')) {
      S.clearState(); window.location.href = 'index.html';
    }
  });
  compute(); renderSingle();
});
