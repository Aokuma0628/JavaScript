import { resolveObjectURL } from "buffer";

class Prepare {
	constructor() {
		// nothing
	}

	val1 = '123';
	val2 = 1;

	initTest(str:string): Promise<any> {
		return new Promise((resolve) => {
			setTimeout(() => {
				this.val1 = '345';
				console.log('val2=', this.val2);
				if (str != null) {
					console.log('str=', str);
				}
				this.val2++;
				resolve(this.val1);
			}, 2000);
		})
	}

	initTestAll(): Promise<any> {
		return new Promise((resolve) => {
			setTimeout(() => {
				console.log('val2(all)=', this.val2);
				this.val2++;
				resolve(this.val1);
			}, 2000);
		})
	
	}

	test1(): string {
		return this.val1;
	}
};

module.exports = Prepare;