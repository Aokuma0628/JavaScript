const Fetch = require('../src/fetch');

// Promise
test('the data is peanut butter', () => {
  return Fetch.fetch_f.then((data: string) => {
    expect(data).toBe('foo fetch');
  });
});

// Async,Await
test('the data is peanut butter', async () => {
  const data = await Fetch.fetch_f;
  expect(data).toBe('foo fetch');
});

// Async,Await resoleves
test('the data is peanut butter', async () => {
  await expect(Fetch.fetch_f).resolves.toBe('foo fetch');
});

// callback
test('the data is peanut butter', done => {
  function callback(error: string, data: string) {
    if (error) {
      done(error);
      return;
    }
    try {
      expect(data).toBe('peanut butter');
      done();
    } catch (error) {
      done(error);
    }
  }

  Fetch.clback(callback);
});