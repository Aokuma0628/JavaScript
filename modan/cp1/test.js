function print(...data) {
	console.log('Qus: ', data[0], '\nAns: ', data[1], `(${typeof(data[1])})`);
}


function printc(num) {
	console.log(`\n######### Question.${num} ##########`);
}

//	☑

//1
// printc(1);
// print('0 + NaN', 0 + NaN);				// NaN
// print('0 + Infinity', 0 + Infinity);		// Infinity
// print('0 + false', 0 + false);			// 0
// print('0 + true', 0 + true);				// 1
// print('0 + null', 0 + null);				// NaN	☑
// print('0 + undefined', 0 + undefined);	// NaN

// print('"" + NaN', "" + NaN);				// NaN	☑
// print('"" + Infinity', "" + Infinity);	// Infinity	☑
// print('"" + false', "" + false);			// ''	☑
// print('"" + true', "" + true);			// ''	☑
// print('"" + null', "" + null);			// ''	☑
// print('"" + undefined', "" + undefined);	// ''	☑


// ######### Question.1 ##########
// Qus: 0 + NaN
// Ans: NaN(number)
// Qus: 0 + Infinity
// Ans: Infinity(number)
// Qus: 0 + false
// Ans: 0(number)
// Qus: 0 + true
// Ans: 1(number)
// Qus: 0 + null	☑
// Ans: 0(number)
// Qus: 0 + undefined
// Ans: NaN(number)
// Qus: "" + NaN	☑
// Ans: NaN(string)
// Qus: "" + Infinity	☑
// Ans: Infinity(string)
// Qus: "" + false	☑
// Ans: false(string)
// Qus: "" + true	☑
// Ans: true(string)
// Qus: "" + null	☑
// Ans: null(string)
// Qus: "" + undefined	☑
// Ans: undefined(string)

//2
// printc(2);
// print('[] + []', [] + []);	//配列？
// print('{} + {}', {} + {});	//空のオブジェクトの足し算
// print('[] + {}', [] + {});	// 配列と空オブジェクトの足し算→?
// print('{} + []', {} + []);	// ?
// print('[] - {}', [] - {});	// 配列から空オブジェクトを引く→?

// let a = [] + [];	//配列
// let b = {} + {};	//オブジェクトの宣言
// let c = [] + {};	//配列に空のオブジェクトを追加？
// let d = {} + [];	//オブジェクトに配列を追加？
// let e = [] - {};	//？

// print('a', a);
// print('b', b);
// print('c', c);
// print('d', d);
// print('e', e);

// ######### Question.2 ##########
// Qus: [] + []	☑
// Ans: (string)
// Qus: { } + {}	☑
// Ans: [object Object][object Object](string)
// Qus: [] + {}	☑
// Ans: [object Object](string)
// Qus: { } +[]	☑
// Ans: [object Object](string)
// Qus: [] - {}	☑
// Ans: NaN(number)
// Qus: a	☑
// Ans: (string)
// Qus: b	☑
// Ans: [object Object][object Object](string)
// Qus: c	☑
// Ans: [object Object](string)
// Qus: d	☑
// Ans: [object Object](string)
// Qus: e	☑
// Ans: NaN(number)

//3
// printc(3);
// print('-10 % 2', (-10) % 2);			// -1
// print('-10.0 % 2', -10.0 % 2);	// -1.0

// ######### Question.3 ##########
// Qus: -10 % 2	☑
// Ans: -0(number)
// Qus: -10.0 % 2	☑
// Ans: -0(number)

//4
// printc(4);
// print('angle 270+180=450 => 90', (270+180)%360);

// ######### Question.4 ##########
// Qus: angle 270 + 180=450 => 90
// Ans: 90(number)

//5
// printc(5);
// print('\\\\', '\\\\');
// let a5 = '\\\\';
// print('\\\\', `${a5}`);
// print('\\\\', '\\' + '\\');
// print('\\\\', '\u{005c}\u{005c}');

// ######### Question.5 ##########
// Qus: \\
// Ans: \\ (string)
// Qus: \\
// Ans: \\ (string)
// Qus: \\
// Ans: \\ (string)


//6
// printc(6);
// print('☺', '☺');

// ######### Question.6 ##########
// Qus:  ?
// Ans :  ? (string)

//7
// printc(7);
// let a7 = 123;
// let b7 = 456;
// let c7 = `${b7}`;
// print('テンプレートリテラルinテンプレートリテラル', `${a7+c7}`);

// ######### Question.7 ##########
// Qus: テンプレートリテラルinテンプレートリテラル
// Ans: 123456(string)

//8
// printc(8);
// let a8 = [0, , 2];
// let b8 = ['0', '', '2'];
// let c8 = ['0', , '2'];
// print('穴のある配列', a8);
// print('穴のある配列', b8);
// print('穴のある配列', c8);

// ######### Question.8 ##########
// Qus: 穴のある配列
// Ans: [0, < 1 empty item >, 2](object)
// Qus: 穴のある配列
// Ans: ['0', '', '2'](object)	☑
// Qus: 穴のある配列
// Ans: ['0', < 1 empty item >, '2'](object)


//9
// printc(9);
// let a9 = [];
// a9[0] = 0;
// a9[0.5] = 0.5;
// a9[1] = 1;
// a9[1.5] = 1.5;
// a9[2] = 2;
// print('array:0,0.5,1,1.5,2', a9);


// ######### Question.9 ##########
// Qus: array: 0, 0.5, 1, 1.5, 2	☑
// Ans: [0, 1, 2, '0.5': 0.5, '1.5': 1.5](object)

//10
// printc(10);
// let a10 = [[1,2,3], [4,5,6], [7,8,9]];
// print('配列の配列の文字列', '' + a10);		// 123456789

// ######### Question.10 ##########
// Qus: 配列の配列の文字列	☑
// Ans: 1, 2, 3, 4, 5, 6, 7, 8, 9(string)

//11
// printc(11);
// let harry = {friends: 'sally'};
// let sally = {friends: 'harry'};

// print('harry', harry);	//object
// print('sally', sally);	//object
// print('harray(json)', JSON.stringify(harry));	//friends:sally
// print('sally(json)', JSON.stringify(sally));	//friends:harry

// ######### Question.11 ##########
// Qus: harry	☑
// Ans: { friends: 'sally' } (object)
// Qus: sally	☑
// Ans: { friends: 'harry' } (object)
// Qus: harray(json)
// Ans: { "friends": "sally" } (string)
// Qus: sally(json)
// Ans: { "friends": "harry" } (string)

