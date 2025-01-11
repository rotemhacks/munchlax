const debounce = <A = unknown, R = void>(
  fn: (args: A) => R,
  ms = 300,
): ((args: A) => Promise<R>) => {
  let timer: ReturnType<typeof setTimeout>;

  const debouncedFunc = (args: A): Promise<R> =>
    new Promise((resolve) => {
      if (timer) {
        clearTimeout(timer);
      }

      timer = setTimeout(() => {
        resolve(fn(args));
      }, ms);
    });

  return debouncedFunc;
};

export default debounce;
