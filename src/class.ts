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
// console.log(bear.power);

// 公有、私有和受保护
class BaseView {
	// pageid // 私有变量, 派生类中不可访问
	private _pageToken: number = 12315;
	protected pageType: string = 'layer';
	// 页面状态
	state?: string;
	// initial
	constructor(initState?: string) {
		this.state = initState;
	}
	// 可以通过public方法访问私有变量, 但是无法直接访问私有变量
	showToken() {
		console.log(this._pageToken);	
	}
}

class UILayerView extends BaseView {
	constructor(state?: string) {
		super(state);
		this.showToken();
	}
}

let UIlayer = new UILayerView('ui_layer');
console.log(UIlayer);