function print(...data) {
	console.log('Qus: ', data[0], '\nAns: ', data[1], `(${typeof (data[1])})`);
}


function printc(num) {
	console.log(`\n######### Question.${num} ##########`);
}


// //1
// printc(1);

// function plusMinusZero(x) {
// 	if (Object.is(x, 0)) {
// 		return 1;
// 	}
// 	else if (Object.is(x, -0)) {
// 		return -1;
// 	}
// 	else {
// 		return 0;
// 	}
// }

// //if(x === 0)はx=0,-0ともにtureを返す
// print('0->1', plusMinusZero(0));
// print('-0->-1', plusMinusZero(-0));
// print('1->0', plusMinusZero(1));

// //2
// printc(2);

// function judgeDouble(x) {
// 	if (Number.isSafeInteger(x)) {
// 		return 'normalized';
// 	}
// 	else if (Number.isFinite(x)){
// 		return 'denormalized';
// 	}
// 	else {
// 		return 'special';
// 	}
// }

// print('normal', judgeDouble(1.234));
// print('denorma', judgeDouble(Math.pow(2,100)));
// print('special', judgeDouble(NaN));

//3
//飛ばす

//4
//不明

//5
//不明

//7
printc(7);

print('1+min', 1 + Number.EPSILON);
print('2+min', 2 + Number.EPSILON);
//不明

//8
//不明

// //9
// printc(9);

// let d = new Date();
// let obj = {};
// obj.year = d.getFullYear();
// obj.month = d.getMonth() + 1;
// obj.day = d.getDate();
// obj.weekday = d.getDay();
// obj.hours = d.getHours();
// obj.minutes = d.getMinutes();
// obj.seconeds = d.getSeconds();
// obj.millis = d.getMilliseconds();

// print('obj=', JSON.stringify(obj));

// //10
// printc(10);

// function calcTimeDiffUTC() {
// 	let d = new Date();
// 	let localhour = d.getHours();
// 	let utchour = d.getUTCHours();

// 	return localhour - utchour;
// }

// print('hour', calcTimeDiffUTC());

