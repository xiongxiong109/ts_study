// 对类的构造函数实例化
class PersonV2 {
	protected constructor(nm: string) {
		console.log(nm);
	}
}

class ManV2 extends PersonV2 {
	nm: string;
	readonly id: string;
	constructor(nm: string) {
		super(nm); // super 必须在constructor的第一位
		this.nm = nm;
		this.id = `${nm}_${Math.random()}`; // readonly属性如果是父类的, 则必须在父类的constructor中赋值
	}
}

// var p = new PersonV2('xx'); // 报错, protected的构造函数的类不能被实例化, 但是可以被继承
let Bear = new ManV2('Bear Cambridge');
// Bear.id = 123123; // 报错, 只读属性只能在声明或者构造函数中被初始化
console.log(Bear.id);