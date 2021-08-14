function print(...data) {
	console.log('Qus: ', data[0], '\nAns: ', data[1], `(${typeof (data[1])})`);
}


function printc(num) {
	console.log(`\n######### Question.${num} ##########`);
}

//	☑

//1

//2
// printc(2);
// let x = 0;
// if (x === 0) {console.log('zero');} else {console.log('nonzero');}

//3
// printc(3);
// let a3 = {};
// let y = a3;

//4
// printc(4);
// print('undefined == null', undefined == null);	//1
// print('null >= 0', null >= 0);									//1
// print('"" == undefined', "" == undefined);			//1	☑
// print('0 <= ""', 0 <= "");											//1

//5
printc(5);
let a5 = 1;
let b5 = 'aaa';

print('a || b', a5 || b5);					//1
print('a ? a : b', a5 ? a5 : b5);		//1
print('a && b', a5 && b5);				//1	☑
print('a && b と同じ方法', '?');		//☑

//6
// printc(6);

// let a6 = [1,2,5,6,3,4,-1];
// let max6 = 0;
// for(let i = 0; i < a6.length; i++) {
// 	if (a6[i] > max6) {
// 		max6 = a6[i];
// 	}
// }
// print('max=6', max6);

// max6 = 0;
// for (let i of a6) {
// 	if (max6 < i) {
// 		max6 = i;
// 	}
// }
// print('max=6', max6);

// max6 = 0;
// for (let i in a6) {
// 	if (max6 < a6[i]) {
// 		max6 = a6[i];
// 	}
// }
// print('max=6', max6);

//7
// printc(7);
// let arr7 = [1,2,3,4,5,6,7,8,9,10,11,12];
// for (let i in arr7) {
// 	print('i+1', i + 1);
// 	if(i + 1 === 10) {
// 		console.log(arr7[i]);	//iの方がstringだから
// 	}
// }


//8
// printc(8);
// for(let i = 0; i < 6; i++) {
// 	let j = '';
// 	switch(i) {
// 	case 0:
// 		j = 'zero';
// 		break;
// 	case 1:
// 		j = 'one';
// 		break;
// 	case 2:
// 		j = 'two';
// 		break;
// 	case 3:
// 		j = 'three';
// 		break;
// 	case 4:
// 		j = 'four';
// 		break;
// 	case 5:
// 		j = 'five';
// 		break;
// 	default:
// 		j = 'nothing';
// 	}

// 	print('j=', j);
// }
// //if-elseで代替可能

//9
// printc(9);
// let n9 = 2;
// let arr9 = [];
// for (let k = 0; k <= 7; k++) {
// 	switch (k) {
// 	case 0:
// 	case 1:
// 	case 2:
// 	case 3:
// 	case 4:
// 	case 5:
// 	case 6:
// 	case 7:
// 		arr9[k + n9 -1] = 0;
// 	default:
// 		arr9[k + n9 - 1] = 0;
// 		break;
// 	}
// 	print('arr[k+n9-1]', arr9[k + n9 - 1]);
// }

//10
// printc(10);
// let i10 = 0;
// let s10 = 'hello world';
// // do {
// // 	i10++;
// // } while(i10 < s10.length && s10[i10] != ' ');

// while (i10 < s10.length && s10[i10] != ' ') {
// 	i10++;
// }
// print('i=', i10);

//11
// printc(11);
// // for (let i = 1; i < 10; i++)
// //  console.log(i);

// let i11 = 0;
// while(i11 < 10) {
// 	console.log(i11++);
// 	i11++;
// }

//  let arr11 = [, 2, ,4];
//  arr11[9] = 100;
// //  for (const element of arr11)
// // 	console.log(element);
// i11 = 0;
// while(i11 < arr11.length) {
// 	console.log(arr11[i11]);
// 	i11++;
// }

// i11 = 0;
// let obj11 = {name: 'Harry', age: 42};
// let key11 = Object.keys(obj11);
// // for (const key in obj11) 
// // 	console.log(`${key}: ${obj11[key]}`);
// while(i11 < key11.length) {
// 	console.log(key11[i11]);
// 	i11++;
// }

//12
// printc(12);

// let arr12 = [[1,2,3], [-1,-2,-3], [4,5,6]];
// let i12 = 0;
// let j12 = 0;
// outer:
// for (i12 = 0; i12 < arr12.length; i12++) {
// 	for (j12 = 0; j12 < arr12[i12].length; j12++) {
// 		if (arr12[i12][j12] < 0) break outer;
// 	}
// }
// console.log(`i=${i12}, j=${j12}`);

//13
//飛ばす

//14
// printc(14);
// let count = 0;
// let sum = 0;
// const arr14 = [1,2,-1,4,5,-100];
// for (let i = 0; i < arr14.length; i++) {
// 	// if (arr14[i] <= 0) continue;
// 	if (arr14[i] > 0) {
// 		count++;
// 		sum += arr14[i];
// 	}
// }
// let avg = count == 0 ? 0 : sum / count;
// print('avg=', avg);


//15
// printc(15);
// let a15 = [1,2,3,4,5,6,7,8,9];
// let b15 = [4,5,6];

// let j15 = 0;
// for (let i = 0; i < a15.length - b15.length; i++) {
// 	for (j15 = 0; j15 < b15.length; j15++) {
// 		if (a15[i + j15] != b15[j15]) {
// 			break;
// 		}
// 	}
// 	if (j15 == b15.length) {
// 		break;
// 	}
// }

// print('result=', j15);


// ######### Question.2 ##########
// zero

// ######### Question.3 ##########

// ######### Question.4 ##########
// Qus: undefined == null
// Ans: true(boolean)
// Qus: null >= 0
// Ans: true(boolean)
// Qus: "" == undefined
// Ans: false(boolean)
// Qus: 0 <= ""
// Ans: true(boolean)

// ######### Question.5 ##########
// Qus: a || b
// Ans: 1(number)
// Qus: a ? a : b
// Ans: 1(number)
// Qus: a && b
// Ans: aaa(string)
// Qus: a && b と同じ方法
// Ans:  ? (string)

// ######### Question.6 ##########
// Qus: max = 6
// Ans: 6(number)
// Qus: max = 6
// Ans: 6(number)
// Qus: max = 6
// Ans: 6(number)

// ######### Question.7 ##########
// Qus: i + 1
// Ans: 01(string)
// Qus: i + 1
// Ans: 11(string)
// Qus: i + 1
// Ans: 21(string)
// Qus: i + 1
// Ans: 31(string)
// Qus: i + 1
// Ans: 41(string)
// Qus: i + 1
// Ans: 51(string)
// Qus: i + 1
// Ans: 61(string)
// Qus: i + 1
// Ans: 71(string)
// Qus: i + 1
// Ans: 81(string)
// Qus: i + 1
// Ans: 91(string)
// Qus: i + 1
// Ans: 101(string)
// Qus: i + 1
// Ans: 111(string)

// ######### Question.8 ##########
// Qus: j =
// 	Ans: zero(string)
// Qus: j =
// 	Ans: one(string)
// Qus: j =
// 	Ans: two(string)
// Qus: j =
// 	Ans: three(string)
// Qus: j =
// 	Ans: four(string)
// Qus: j =
// 	Ans: five(string)

// ######### Question.9 ##########
// Qus: arr[k + n9 - 1]
// Ans: 0(number)
// Qus: arr[k + n9 - 1]
// Ans: 0(number)
// Qus: arr[k + n9 - 1]
// Ans: 0(number)
// Qus: arr[k + n9 - 1]
// Ans: 0(number)
// Qus: arr[k + n9 - 1]
// Ans: 0(number)
// Qus: arr[k + n9 - 1]
// Ans: 0(number)
// Qus: arr[k + n9 - 1]
// Ans: 0(number)
// Qus: arr[k + n9 - 1]
// Ans: 0(number)

// ######### Question.10 ##########
// Qus: i =
// 	Ans: 5(number)

// ######### Question.11 ##########
// 0
// 2
// 4
// 6
// 8
// undefined
// 2
// undefined
// 4
// undefined
// undefined
// undefined
// undefined
// undefined
// 100
// name
// age

// ######### Question.12 ##########
// i = 1, j = 0

// ######### Question.14 ##########
// Qus: avg =
// 	Ans: 3(number)

// ######### Question.15 ##########
// Qus: result =
// 	Ans: 3(number)
// 	[buntyo@svbmax cp2]$