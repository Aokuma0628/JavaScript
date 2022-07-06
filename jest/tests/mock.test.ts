function forEach(items: number[], callback: (items: number) => number) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

const mockCallback = jest.fn(x => 42 + x);
forEach([0, 1], mockCallback);

// The mock function is called twice
test("mock test1", () => {
	expect(mockCallback.mock.calls.length).toBe(2);
});

// The first argument of the first call to the function was 0
test("mock test2", () => {
	expect(mockCallback.mock.calls[0][0]).toBe(0);
});

// The first argument of the second call to the function was 1
test("mock test3", () => {
	expect(mockCallback.mock.calls[1][0]).toBe(1);
});

// The return value of the first call to the function was 42
test("mock test4", () => {
	console.log(mockCallback.mock.results)
	expect(mockCallback.mock.results[0].value).toBe(42);
});
