function print(...data) {
	console.log('Qus: ', data[0], '\nAns: ', data[1], `(${typeof (data[1])})`);
}


function printc(num) {
	console.log(`\n######### Question.${num} ##########`);
}

function p(data) {
	console.log(data,`(${typeof(data)})`);
}

//1
function func1() {
	printc(1);

	let str = String.fromCodePoint(0x48, 0x69, 0x20, 0x1F310, 0x21);
	print('str', str);

	let codeP = [0x48, 0x69, 0x20, 0x1F310, 0x21];
	str = String.fromCodePoint(...codeP);
	print('str2', str);

	let charcters = [...str];
	print('characters', charcters);

	let point = [...str].map(c => c.codePointAt(0));
	print('point', point);
}

//2
function func2() {
	printc(2);
	let index = 'Hello yellow'.indexOf('el');
	p(index);
	index = 'Hello yello'.lastIndexOf('el');
	p(index);


	let url = 'https://aaa.gif';
	let isHttps = url.startsWith('https://');
	let isGif = url.endsWith('.gif');
	let isQuery = url.includes('?');
	p(isHttps);
	p(isGif);
	p(isQuery);

	let substr = '1234567890'.substring(3, 7);
	p(substr);
	substr = '1234567890'.slice(-7, -3);
	p(substr);

	let csv = '1 2 3 4 5 6';
	p(csv.split(' '));
	p(csv.split(' ', 3));

}

//3
function func3() {
	printc(3);
	const rep = 'ho '.repeat(3);
	p(rep);
	p(rep.trim());

	let pad = '12'.padStart(5);
	p(pad);
	pad = '12'.padStart(5,'x');
	p(pad);
	let uppercased = 'abcdefg'.toUpperCase();
	p(uppercased);
	const n = 7;
	let connect = 'agent'.concat(' ', 'taro is ', n);
	p(connect);
	connect = `agent ${n}`;
	p(connect);
	connect = ['agent', ' ', n].join('');
	p(connect);
}

//4
function func4() {
	printc(4);
	const person = { name: 'Harry', age: 42 };

	const tag = (fragments, ...values) => {
		let result = fragments[0];
		for (let i = 0; i < values.length; i++) {
			result += `<tag>${values[i]}</tag>${fragments[i + 1]}`;
		}
		return result;
	};
	
	//タグ付きテンプレートリテラル
	// func`テンプレートリテラル`の形式で記述。funcの後に()は付けない
	let str = tag`Next year, ${person.name} will be ${person.age + 1}.`;
	p(str);

	let path = String.raw`c:\users\nate\n`;
	p(path);

}

function func6() {
	let str = 'href123';
	let str2 = '1234';
	let str3 = 'abc';
	let str4 = 'HREF';

	if (/.r.f/.test(str4))
		p(/.r.f/);
	
	if (/.r.f/i.test(str4))
		p(/.r.f/i);
	
	if (/[0-9]/.test(str))
		p(/[0-9]/);
	
	if (/[0-9]+/.test(str))
		p(/[0-9]+/);
	
	if (/[^0-9]/.test(str))
		p(/[^0-9]/);
	
	if (/[^0-9]+/.test(str))
		p(/[^0-9]+/);
	
		
	if (/^[^0-9]+$/.test(str3))
		p(/^[^0-9]+$/);
	
	p(/[0-9]+/.exec(str));
}


// func1();
// func2();
//func3();
//func4();
func6();