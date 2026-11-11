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
      'Leitura e interpretação': 'Retome a identificação da ideia principal e das informações implícitas. Diferencie o que o texto afirma diretamente do que pode ser inferido, leia títulos e elementos visuais e localize no texto os trechos que sustentam sua interpretação.',
      'Gêneros e textualidade': 'Compare finalidade, interlocutor e estrutura de notícia, artigo de opinião, cartaz, anúncio, fábula e instrução. Diferencie narração, descrição, exposição, argumentação e injunção; pratique também paráfrase e intertextualidade.',
      'Coesão e relações de sentido': 'Organize conectivos por sentido: adição, oposição, causa, consequência, concessão, tempo e alternância. Observe a retomada de termos por pronomes e expressões referenciais e identifique como as conexões fazem o texto progredir.',
      'Morfologia e formação de palavras': 'Revise classes gramaticais, radical, prefixo e sufixo, derivação prefixal e sufixal, parassíntese e composição por justaposição ou aglutinação. Separe os elementos da palavra antes de classificá-la.',
      'Sintaxe e termos da oração': 'Pratique a identificação de sujeito, núcleo do sujeito, predicado, predicativo, objeto direto e indireto, além das funções de pronomes relativos e conjunções integrantes.',
      'Pontuação e efeitos de sentido': 'Revise vírgula em vocativo, aposto e orações adjetivas; estude também dois-pontos e travessões. Observe como a pontuação pode alterar o sentido de um período.',
      'Concordância, regência e norma-padrão': 'Revise concordância verbal considerando o núcleo do sujeito, inclusive em sujeitos coletivos e pospostos. Estude a regência dos verbos mais frequentes e casos de crase como resultado da fusão da preposição “a” com o artigo feminino “a”.',
      'Semântica e figuras de linguagem': 'Observe o sentido contextual das palavras, expressões idiomáticas, polissemia, ambiguidade, denotação e conotação. Revise metáfora, personificação, hipérbole, eufemismo, metonímia e catacrese.',
      'Variação linguística e norma-padrão': 'Estude variedades regionais, sociais e situacionais, reconhecendo que a escolha linguística depende do contexto e do grau de formalidade. Compare usos coloquiais e formais sem tratar variação como incapacidade de comunicação.'
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
