function createDebounceFunction(cb, ms) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => cb.apply(this, args), ms);
  };
}
