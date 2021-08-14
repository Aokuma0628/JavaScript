function print(...data) {
	console.log('Qus: ', data[0], '\nAns: ', data[1], `(${typeof (data[1])})`);
}


function printc(num) {
	console.log(`\n######### Question.${num} ##########`);
}

// //1
// printc(1);
// function indexOf(arr, value) {
// 	for (let i in arr) {
// 		if (arr[i] === value) return i;
// 	}
// 	return -1;
// }

// let arr1 = [0,1,2,3,4];
// let obj1 = {name: 'hero', age: 14};
// print('arr', indexOf(arr1, 1));
// print('object', indexOf(obj1, 1));	//-1

// //2
// printc(2);
// function indexOf2(arr, value) {
// 	let idx = -1;
// 	for (let i in arr) {
// 		if (arr[i] === value) {
// 			idx = i;
// 			break;
// 		}
// 	}
// 	return idx;
// }

// //3
// printc(3);

// function values(f, low, high) {
// 	let arr = [];
// 	if (low > high) {
// 		return arr;
// 	}
	
// 	for (let i = low; i <= high; i++) {
// 		arr.push(f(i));
// 	}
// 	return arr;
// }

// print('arr=', values(x => {return x * 2}, 1, 5));

// //4
// printc(4);

// let arr4 = [4,6,7,10,1,12,3,6];

// print('arr 降順', arr4.sort((x,y) => {
// 	if (x > y) {
// 		return -1;
// 	}
// 	else {
// 		return 1;
// 	}
// }));

// let people = [{name:'a', age:12}, {name:'b', age:14}, {name:'c', age:13}];
// print('people 昇順', people.sort((x,y) => {
// 	if (x.age > y.age) {
// 		return 1;
// 	}
// 	else {
// 		return -1;
// 	}
// }));

// let string = ['aaa', 'bb', 'dddd', 'e'];
// print('string 文字列長昇順',string.sort((x,y) => {
// 	if (x.length > y.length) {
// 		return 1;
// 	}
// 	else {
// 		return -1;
// 	}
// }));

// //5
// printc(5);

// const constructCounter = (init, delta) => {
// 	let increment = delta;
// 	let count = init - increment;

// 	return {
// 		count: () => {
// 			return count += increment;
// 		}
// 	};
// };

// const myCounter = constructCounter(0, 2);
// print('first', myCounter.count());
// print('second', myCounter.count());

//6
// printc(6);

// function f(a = 1, b = 1) {
// 	console.log(`a=${a}, b=${b}`);
// }

// f();
// f(a = 5);
// f(a=7, b =10);
// f(b=10, a=7);


// //7
// printc(7);

// function average(...arr) {
// 	let sum = 0;
// 	let num = 0;
// 	for (const value of arr) {
// 		sum += value;
// 		num++;
// 	}
// 	return num == 0 ? 0 : sum / num;
// }

// print('average', average(1,2,3,4,5,6,7,8,9,10));

// //8
// printc(8);

// function test(...str) {
// 	console.log(`str=${str}`);
// }

// test('abcdef');

// //9

// //10
// // printc(10);
// // for (let i = 0; i < 10; i++) {
// // 	setTimeout(() => {console.log(i);}, 1000 * i);
// // }
// //var i にすると10が１秒間隔で表示される
// //let i にすると0,1,2,3と表示されていく

// //11
// printc(11);

// const fac = n => n > 1 ? n * fac(n - 1) : 1;
// print('fac(4)', fac(4));
// //fac(n-1)は巻き上げの効果により、宣言中(宣言後ではない)の関数facが使用できている。

// //12
// printc(12);

// if (Math.random() < 0.5) {
// 	say('hello');
// 	function say(greeting) { console.log(greeting); }
// }
// say('Goodbye');

// //say()の関数は巻き上げの効果によりブロック内で宣言した関数も使用できる
// //ただし、random()の結果によりif文に入らなかった場合は宣言されたことにならず、
// //say('Goodbye')でエラーになる

// //13
// printc(13);

// function average13(...arr) {
// 	let sum = 0;
// 	let num = 0;
// 	for (const value of arr) {
// 		if (isNaN(value)) {
// 			throw Error('not a number');
// 		}
// 		sum += value;
// 		num++;
// 	}
// 	return num == 0 ? 0 : sum / num;
// }

// try {
// 	let avg = average13(1, 2, 3, 4, 5, 6, 'test', 8, 9, 10);
// 	print('average', avg);
// }
// catch (e) {
// 	console.log(e);
// }

// //14
// printc(14);

// // try {
// // 	console.log('aaa');
// // 	throw 'error!!!';
// // }
// // catch (e) {
// // 	console.log(e);
// // }
// // finally {
// // 	console.log('fin');
// // }

// try {
// 	try {
// 		console.log('aaa');
// 		throw 'error!!!';
// 	}
// 	finally {
// 		console.log('fin');
// 	}
// }
// catch (e) {
// 	console.log(e);
// }
