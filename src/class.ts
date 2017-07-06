// 基于类的编程
class HelloCls {
	greet: string;
	constructor(nm: string) {
		this.greet = nm;
		// this.sayHello();
	}
	sayHello() {
		console.log(`hello ${this.greet}`)
	}
}

// let helloWorld = new HelloCls('world');
// helloWorld.sayHello();

// 继承
class Human {
	nm: string;
	constructor(nm: string) {
		this.nm = nm;
	}
}

class Man extends Human {
	power: number;
	constructor(nm: string, power: number) {
		super(nm);
		this.power = power;
	}
}

let bear = new Man('xiongxiong', 1899);
console.log(bear.power);