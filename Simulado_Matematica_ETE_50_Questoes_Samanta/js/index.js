document.addEventListener('DOMContentLoaded', () => {
  const S = SamantaExam;
  const state = S.loadState();
  const startBtn = document.getElementById('startBtn');
  const note = document.getElementById('startNote');
  const resultsBtn = document.getElementById('resultsBtn');
  const resetBtn = document.getElementById('resetBtn');
  const status = document.getElementById('examStatus');
  if (state && state.started && !state.delivered) {
    startBtn.textContent = 'Retomar Prova';
    note.textContent = `${state.answers.filter(a => a !== null).length}/50 respostas salvas. O tempo continua sendo contado.`;
    status.textContent = 'Prova em andamento';
  } else if (state && state.delivered) {
    startBtn.textContent = 'Iniciar novo simulado';
    note.textContent = 'Há um resultado anterior salvo neste navegador.';
    resultsBtn.classList.remove('hidden');
    resetBtn.classList.remove('hidden');
    status.textContent = 'Prova entregue';
  }
  startBtn.addEventListener('click', () => {
    const current = S.loadState();
    if (current && current.started && !current.delivered) {
      window.location.href = 'prova.html';
      return;
    }
    S.saveState(S.newState(window.QUESTIONS_COUNT || 50));
    window.location.href = 'prova.html';
  });
  resultsBtn.addEventListener('click', () => window.location.href = 'resultados.html');
  resetBtn.addEventListener('click', () => {
    if (confirm('Deseja apagar o resultado anterior e iniciar uma nova tentativa?')) {
      S.clearState();
      window.location.reload();
    }
  });
});
