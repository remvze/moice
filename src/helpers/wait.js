export const until = func =>
  new Promise(resolve => {
    const check = () => {
      if (func()) return resolve();

      setTimeout(check, 10);
    };

    check();
  });
