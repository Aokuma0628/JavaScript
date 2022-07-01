const Sum = require('../src/sum');

// toBe()
test('add 1 + 2 to equal 3', () => {
	expect(Sum(1, 2)).toBe(3);
});

//toEqual()
test('object assignment', () => {
	interface OBJTEST { one: number, two: number };
  let data:OBJTEST = {one: 1, two: 2};
  data['two'] = 5;
  expect(data).toEqual({one: 1, two: 5});
});

//not.toBe()
test('adding positive numbers is not zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});

// null test
test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

// zero test
test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});