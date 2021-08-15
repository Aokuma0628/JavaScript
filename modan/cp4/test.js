function print(...data) {
	console.log('Qus: ', data[0], '\nAns: ', data[1], `(${typeof (data[1])})`);
}


function printc(num) {
	console.log(`\n######### Question.${num} ##########`);
}

// //1
// printc(1);
// let createPoint = {
// 	x: 0,
// 	y: 0,
// 	getX: function() {
// 		return this.x;
// 	},
// 	getY: function() {
// 		return this.y;
// 	},
// 	translate: function(deltaX, deltaY) {
// 		this.x += deltaX;
// 		this.y += deltaY;
// 	},
// 	scale: function(factor) {
// 		this.x *= factor;
// 		this.y *= factor;
// 	}
// };

// print('x=0,y=0', `x=${createPoint.getX()}, y=${createPoint.getY()}`);
// createPoint.translate(1,2);
// print('translate(1,2)', `x=${createPoint.getX()}, y=${createPoint.getY()}`);
// createPoint.scale(3);
// print('scale(3)', `x=${createPoint.getX()}, y=${createPoint.getY()}`);

// //2
// printc(2);

// function createPoint2(x, y) {
// 	this.x = x;
// 	this.y = y;
// }

// createPoint2.prototype.getX = function() {
// 	return this.x;
// };

// createPoint2.prototype.getY = function () {
// 	return this.y;
// };

// createPoint2.prototype.translate = function (deltaX, deltaY) {
// 	this.x += deltaX;
// 	this.y += deltaY;
// };

// createPoint2.prototype.scale = function (factor) {
// 	this.x *= factor;
// 	this.y *= factor;
// };

// const test2 = new createPoint2(2,2);
// print('x=2,y=2', `x=${test2.getX()}, y=${test2.getY()}`);
// test2.translate(1, 2);
// print('translate(1,2)', `x=${test2.getX()}, y=${test2.getY()}`);
// test2.scale(3);
// print('scale(3)', `x=${test2.getX()}, y=${test2.getY()}`);

// //3
// printc(3);

// //上の1,2の構文ではなく、実際はこのクラス構文を使うべきである。

// class createPoint3 {
// 	constructor(x, y) {
// 		this.x = x;
// 		this.y = y;
// 	}
// 	getX() {
// 	return this.x;
// 	}
// 	getY() {
// 		return this.y;
// 	}
// 	translate(deltaX, deltaY) {
// 		this.x += deltaX;
// 		this.y += deltaY;
// 	}
// 	scale(factor) {
// 		this.x *= factor;
// 		this.y *= factor;
// 	}
// }

// const test3 = new createPoint3(3,3);
// print('x=3,y=3', `x=${test3.getX()}, y=${test3.getY()}`);
// test3.translate(1, 2);
// print('translate(1,2)', `x=${test3.getX()}, y=${test3.getY()}`);
// test3.scale(3);
// print('scale(3)', `x=${test3.getX()}, y=${test3.getY()}`);

// //4
// printc(4);

// class createPoint4 {
// 	constructor(x, y) {
// 		this.x = x;
// 		this.y = y;
// 	}
// 	get getX() {
// 		return this.x;
// 	}
// 	get getY() {
// 		return this.y;
// 	}
// 	set setX(x) {
// 		this.x = x;
// 	}
// 	set setY(y) {
// 		this.y = y;
// 	}
// 	translate(deltaX, deltaY) {
// 		this.x += deltaX;
// 		this.y += deltaY;
// 	}
// 	scale(factor) {
// 		this.x *= factor;
// 		this.y *= factor;
// 	}
// }

// const test4 = new createPoint4(4, 4);
// print('x=4,y=4', `x=${test4.getX}, y=${test4.getY}`);
// test4.setX = 1;
// test4.setY = 2;
// print('set(1,2)', `x=${test4.getX}, y=${test4.getY}`);


//5
printc(5);

function createGreateble(str) {
	const result = new String(str);
	result.greet = function(greeting) {
		return `${greeting}, ${this}!`;
	};
	return result;
}

const g = createGreateble('World');
console.log(g.greet('Hello'));

//6
printc(6);

class People {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
}

const withGreeter = baseclass => 
	class extends baseclass {
		greet(greeting) {
			return `${greeting}, ${this.name}!`;
		}
	};

const pClass = withGreeter(People);
const p = new pClass('Taro', 42);
print('Hello Taro', p.greet('Hello'));

//7
printc(7);


// ######### Question.1 ##########
// Qus: x = 0, y = 0
// Ans: x = 0, y = 0(string)
// Qus: translate(1, 2)
// Ans: x = 1, y = 2(string)
// Qus: scale(3)
// Ans: x = 3, y = 6(string)

// ######### Question.2 ##########
// Qus: x = 2, y = 2
// Ans: x = 2, y = 2(string)
// Qus: translate(1, 2)
// Ans: x = 3, y = 4(string)
// Qus: scale(3)
// Ans: x = 9, y = 12(string)

// ######### Question.3 ##########
// Qus: x = 3, y = 3
// Ans: x = 3, y = 3(string)
// Qus: translate(1, 2)
// Ans: x = 4, y = 5(string)
// Qus: scale(3)
// Ans: x = 12, y = 15(string)

// ######### Question.4 ##########
// Qus: x = 4, y = 4
// Ans: x = 4, y = 4(string)
// Qus: set(1, 2)
// Ans: x = 1, y = 2(string)

// ######### Question.5 ##########
// Hello, World!

// ######### Question.6 ##########
// Qus: Hello Taro
// Ans: Hello, Taro!(string)