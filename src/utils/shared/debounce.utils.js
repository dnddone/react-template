export const debounce = (func, delay) => {
  let timerId;

  const debounced = (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => func(...args), delay);
  };

  debounced.clear = () => {
    clearTimeout(timerId);
  };

  return debounced;
};
