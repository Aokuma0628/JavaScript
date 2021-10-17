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
	const delayf = (result, delay) => {
		return new Promise((resolve, reject) => {
			const callback = () => resolve(result);
			setTimeout(callback, delay);
		});
	};

	const instf = (val) => {
		return Promise.resolve(val);
	};


	const pro = delayf(10, 3000);
	p(pro);

	pro.then((value) => {
		p(value);
		p(pro);
		return delayf(20, 2000);
	})
	.then((value) => {
		p(value);
		return instf(30);
	})
	.then((value) => {
		p(value);
	});

}

function func2() {
	printc(2);

	const delayf = (result, delay) => {
		return new Promise((resolve, reject) => {
			const callback = () => resolve(result);
			setTimeout(callback, delay);
		});
	};

	const instrs = (value) => {
		return Promise.resolve(value);
	};

	const instrj = (value) => {
		return Promise.reject(value);
	};

	const prm1 = delayf('apple', 2000)
		.then((value) => {
			p('then');
			p(value);
			return instrs('ringo');
		})
		.then((value) => {
			p(value);
			return instrj('banana');
		})
		.then((value) => {
			p(value);
			p('success');
		})
		.catch((value) => {
			p('catch');
			p(value);
			return instrs('aaa');
		})
		.finally(() => {
			p('finish');
		});
	
	const prm2 = delayf(123, 3000)
		.then((value) => {
			p('prm2');
			p(value);
			return instrj(987);
		});
	
	Promise.all([prm1, prm2])
		.then((value) => {
			p('all then');
			p(value);
		})
		.catch((value) => {
			p('all catch');
			p(value);
		});
	
	Promise.race([prm1, prm2])
		.then((value) => {
			p('race then');
			p(value);
		})
		.catch((value) => {
			p('race catch');
			p(value);
		});
}


function func3() {
	const delayf = (result, delay) => {
		return new Promise((resolve, reject) => {
			const callback = () => resolve(result);
			setTimeout(callback, delay);
		});
	};

	const instrs = (value) => {
		return Promise.resolve(value);
	};

	const instrj = (value) => {
		return Promise.reject(value);
	};


	const prm1 = async (result, delay) => {
		p('prm1');
		const prm = await delayf(result, delay);
		p(prm);
	};

	const prm2 = (result, delay) => {
		p('prm2');
		return delayf(result, delay);
	};

	prm1('success', 2000)
		.then((value) => {
			p('then');
			p(value);
		});
	
	prm2('success prm2', 3000)
		.then((value) => {
			p('then prm2');
			p(value);
		});
	
	const tmp = async () => {
		const test = await prm2('test', 2500);
		p(test);
	};
	tmp();
}


async function func4() {
	const test = async () => {
		return 1;
	};

	const f = async () => {
		throw 1;
	};

	p(test);
	let ret = test();
	p(ret);
	ret.then((val) => {
		p(val);
	});
	let aw = await test();
	p(aw);

	try {
		let a = await f();
		p('not fail');
	}
	catch {
		p('fail');
	}

}


//func1();
//func2();
//func3();
func4();