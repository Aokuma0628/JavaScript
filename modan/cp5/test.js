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

// //7
// printc(7);

// print('1+min', 1 + Number.EPSILON);
// print('2+min', 2 + Number.EPSILON);
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

// //11
// printc(11);

// //うるう年とは
// //西暦が４で割り切れる、かつ、100で割り切れない
// //もしくは西暦が400で割り切れる

// function isLeapYear(year) {
// 	if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
// 		return true;
// 	}
// 	else {
// 		return false;
// 	}
// }

// let d = new Date();
// print('2021?', isLeapYear(d.getFullYear()));

// //12
// printc(12);

// //1970/1/1 は木曜日

// let unix = d.getTime() / 1000; //秒
// let date = Math.floor(unix / (60 * 60 * 24));

// let day = date % 7 + 4;
// if (day > 6) {
// 	day -= 7;
// }

// print('today day', day);

// //13
// printc(13);

// function createCalender(date) {
// 	let cal = '';
// 	for (let i = 1; i <= 31; i++) {
// 		date.setDate(i);
// 		if (i !== date.getDate()) {
// 			break;
// 		}

// 		let day = date.getDay();
// 		switch (day) {
// 			case 0:
// 				cal += `${i}`;
// 				break;
// 			case 6:
// 				cal += ` ${i}\n`;
// 				break;
// 			default:
// 				cal += ` ${i}`;
// 		}
// 	}

// 	return cal;
// }

// let d2 = new Date();
// let cal = createCalender(d2);

// print('calender', cal);

// //14
// printc(14);

// function diffdate(d1, d2) {
// 	let t1 = d1.getTime() / 1000;
// 	let t2 = d2.getTime() / 1000;

// 	let diff = Math.abs(t1 - t2);
// 	return diff / (60 * 60 * 24);
// }

// let d14 = new Date();
// let tmpd = new Date();
// tmpd.setDate(20);
// let d142 = new Date(tmpd.setHours(20));

// print('diff', diffdate(d14, d142));



