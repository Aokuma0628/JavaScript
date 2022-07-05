const Pre = require('../src/prepare');
const pre = new Pre();


beforeEach( async () => {
	await	pre.initTest(null);
});

beforeAll( async () => {
	await	pre.initTestAll();
});

test('prepare test1', () => {
	expect(pre.test1()).toBe('345');
});

test('prepare test1', () => {
	expect(pre.test1()).toBe('345');
});

describe('test group1', () => {
	console.log('discribe log');

	beforeEach( async () => {
		await	pre.initTest('abc');
	});

	test.only('prepare group test1', () => {
		expect(pre.test1()).toBe('345');
	});
})