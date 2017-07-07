// getters and setters 类属性存取器
class Employee {
	protected _salary: number;
	// 静态属性
	static defaultProps = {
		disX: 0
	};
	// 反映到es5中, 则是通过重写salary属性的get set函数, 来达到访问内部属性的目的
	get salary(): number {
		// 静态属性要通过类名来访问, 实例属性可以通过this访问
		console.log(Employee.defaultProps);
		return this._salary;
	}
	// set 函数不能有返回值类型?
	set salary(price: number) {
		this._salary = price;
	}
}

let front_end = new Employee();
// console.log(front_end.salary);
// front_end.salary = 203.5;
// console.log(front_end.salary);
// console.log(front_end._salary); // 直接访问会报错, 但是可以通过get、set属性间接获取
// console.log(front_end.defaultProps);

// 抽象类, 抽象类与接口类似, 都是定义了方法签名但是不包含方法体
// 抽象方法必须包含 abstract关键字并且可以包含访问修饰符
// 抽象方法不包含具体实现并且必须在派生类中实现
abstract class AbstractModel {
	protected _url: string;
	protected _method: string;
	constructor(url: string, method: string) {
		this._url = url;
		this._method = method;
	}
	toString(): void {
		console.log(this.url);
		console.log(this.method);
	}
	get url() {return this._url}
	get method() {return this._method}
	// 抽象方法
	abstract fetch(params: object): object;
}

// 抽象类不能被直接实例化, 只能实例化其派生类
// let BaseModel = new AbstractModel('/apis', 'get'); // error
class BaseModel extends AbstractModel {
	constructor(url: string, method: string) {
		super(url, method);
		console.log(arguments);
	}
	fetch(params: object): object {
		console.log(params);
		return params;
	}
}

let CarBizModel: BaseModel = new BaseModel('/apis', 'get');
CarBizModel.fetch({uid: '123546sdasd'});