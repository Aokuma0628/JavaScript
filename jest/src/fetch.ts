
const fetch_f:Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
		resolve('foo fetch');
  }, 2000);
});

exports.fetch_f = fetch_f;

const clback = (f: Function) => {
  if (f) {
    f(null, 'peanut butter');
  }
  return;
};

exports.clback = clback;