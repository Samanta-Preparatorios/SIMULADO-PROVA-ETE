(() => {
  const KEY = 'samanta_ete_portuguese_exam_v1';
  const NAME_PREFIX = 'SAMANTA_PORTUGUESE_EXAM_STATE:';
  function readNameState() {
    try {
      if (!window.name || !window.name.startsWith(NAME_PREFIX)) return null;
      return JSON.parse(decodeURIComponent(window.name.slice(NAME_PREFIX.length)));
    } catch (err) { return null; }
  }
  function writeNameState(state) {
    try { window.name = NAME_PREFIX + encodeURIComponent(JSON.stringify(state)); return true; }
    catch (err) { return false; }
  }
  function loadState() {
    try {
      const stored = localStorage.getItem(KEY);
      if (stored) return JSON.parse(stored);
    } catch (err) { /* O armazenamento local pode ser bloqueado em páginas file://. */ }
    return readNameState();
  }
  function saveState(state) {
    let saved = false;
    try { localStorage.setItem(KEY, JSON.stringify(state)); saved = true; }
    catch (err) { /* Usa o estado da janela como alternativa local. */ }
    const fallbackSaved = writeNameState(state);
    return saved || fallbackSaved;
  }
  function clearState() {
    try { localStorage.removeItem(KEY); } catch (err) { /* armazenamento local indisponível */ }
    if (window.name && window.name.startsWith(NAME_PREFIX)) window.name = '';
  }
  function formatTime(total) {
    total = Math.max(0, Math.floor(total || 0));
    const h = Math.floor(total / 3600), m = Math.floor((total % 3600) / 60), s = total % 60;
    return [h, m, s].map(n => String(n).padStart(2, '0')).join(':');
  }
  function elapsedSeconds(state) {
    if (!state || !state.startedAt) return Math.max(0, state?.seconds || 0);
    if (state.delivered) return Math.max(0, state.seconds || 0);
    return Math.max(0, Math.floor((Date.now() - state.startedAt) / 1000));
  }
  function newState(total) {
    return { answers: Array(total).fill(null), started: true, delivered: false,
      startedAt: Date.now(), seconds: 0, current: 0, version: 2 };
  }
  window.SamantaExam = { KEY, loadState, saveState, clearState, formatTime, elapsedSeconds, newState };
})();
