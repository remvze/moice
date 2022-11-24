/**
 * Wait until a function returns true
 *
 * @param {Function} func - Verification function
 * @returns {Promise}
 *
 * @example
 *   await until(() => Math.random() > 0.8)
 */
export const until = func =>
  new Promise(resolve => {
    const check = () => {
      if (func()) return resolve();

      setTimeout(check, 10);
    };

    check();
  });
