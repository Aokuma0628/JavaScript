function print(...data) {
	console.log('Qus: ', data[0], '\nAns: ', data[1], `(${typeof (data[1])})`);
}


function printc(num) {
	console.log(`\n######### Question.${num} ##########`);
}

function p(data) {
	console.log(data, `(${typeof(data)})`);
}

function pj(data) {
	console.log('%j', data, `(${typeof(data)})`);
}

//1
function func1() {
	printc(1);
	const array100 = [];
	array100.length = 100;
	p(array100);
	const array10 = [];
	array10.length = 10;
	p(array10);
	const array0 = [];
	p(array0);

	const a = ['a', 'b', 'c'];
	const b = [1, 2, 3];
	const c = [...a, ...b];
	const d = [a, b];
	p(c);
	p(d);

	const arraylike = { length: 2, 0: 'apple', 1: 'banana', 2: 'orange' };
	const elements = Array.from(arraylike, (elm, idx) => `idx[${idx}] = ${elm}`);
	p(arraylike);
	p(elements);
}

function func2() {
	printc(2);

	const array = [1, 2, 3, 4, 5, 6, 7, 8];
	p(array.length);
	array[array.length] = 9;
	p(array);
	array.length = 10;
	p(array);
	array.length = 5;
	p(array);

	array.pop();
	p(array);
	array.push(12,13);
	p(array);
	array.shift();
	p(array);
	array.unshift(13,14);
	p(array);

}

function func4() {
	const array = [1, 2, 3, 4, 5];
	array.fill(3, 3, 4);
	p(array);
	array.reverse();
	p(array);
	array.sort((x, y) => y - x);
	p(array);

	const arr = [['a', 'b'], ['c', 'd']];
	p(arr);
	p(arr.flat());
	const arr3 = [...array, 9, 9, ...arr.flat()];
	p(arr3);

}

function func5() {
	const arr = [1, 2, 3, 4, 5];
	const a3 = arr.find(x => x >= 3);
	const a4 = arr.find((e, i) => { console.log(e, i); e >= 4; });
	p(a4);
	p(a3);

	const arr1 = ['a', 'b', 'c'];
	for (const e of arr1) {
		p(e);
	}
	for (const i in arr1) {
		p(i);
	}

	for (const [i, e] of arr1.entries()) {
		console.log(i, e);
	}

	const arr2 = arr1.map(e => e + `${e + 1}`);
	p(arr2);
	p(arr1);
}

function func10() {
	const map = new Map([
		[1, 'hello'], ['aaa', 'bbb'], ['ccc', 123]
	]);
	map.set('key', 'val');
	map.delete('aaa');
	p(map);

	for (const a of map) {
		p(a);
	}

	const d = new Date();
	p(d);

	const iarr = new Int32Array(10);
	iarr[0] = 1;
	iarr[1] = 2;
	iarr[2] = 40000.25;
	p(iarr);
}



//func1();
//func2();
//func3();
//func4();
//func5();
//func6();
func10();