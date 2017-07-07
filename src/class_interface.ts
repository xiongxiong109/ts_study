// 接口与类的关系、区别
/*
	从前面可以得知, 接口可以继承自类, 类可以应用某个接口
	而且类与接口很类似, 比如都是可以定义一些属性、方法
	但是接口只是定义了属性、方法，并不会赋予具体的值和方法实现
	类则是实现了相关的方法(抽象类也不会去实现抽象方法)
	###################
	1、接口类似于类，但接口的成员都没有执行方式，它只是方法、属性、事件和索引的组合而已，并且也只能包含这四种成员；类除了这四种成员之外还可以有别的成员(如字段)。
	2、不能实例化一个接口，接口只包括成员的签名；而类可以实例化(abstract类除外)。
	3、接口没有构造函数，类有构造函数。
	4、接口不能进行运算符的重载，类可以进行运算符重载。
	5、接口的成员没有任何修饰符，其成员总是公共的，而类的成员则可以有修饰符(如：虚拟或者静态)。
	6、派生于接口的类必须实现接口中所有成员的执行方式，而从类派生则不然。
	###################
	通俗的理解就是:
	类用于实现某个功能, 接口则是负责将这个功能的部分方法和属性暴露给外部使用
	类自身又有各种私有、公有、受保护、静态等属性，来控制类与类之间派生、继承的时候的作用域和访问权限
*/

// 定义一个枚举类型
enum Protocol {
	normal = 'http://',
	secure = 'https://',
	file = 'file://'
}
// 定义一个SOA拉取服务端数据的接口
interface SOAFetchInterface {
	protocol: Protocol,
	// 拉取方法
	fetch(params: object): void;
	// 取消fetch
	abort(): void;
	// 获取当前请求信息
	getFetchInfo(): object;
}

// 定义一个fetch api的类, 来实现这个接口
abstract class AbstractFetchBaseModel implements SOAFetchInterface {

	protocol: Protocol;
	// 这是一个不可暴露给外部的私有值, 与服务器安全签名息息相关
	private _token: string = 'asd32a1dwa321321asd';
	get token() {
		return this._token;
	}
	constructor(params: object) {
		this.protocol = Protocol.secure;
		// console.log(params);
		// this.protocol = Protocol[pro];
	}

	abstract fetch(params: object): void;
	abstract abort(): void;

	getFetchInfo(): object {
		return {
			protocol: this.protocol
		}
	}

}

// 抽象类的派生类, 来实现这个抽象类中的具体方法
class FetchBaseModel extends AbstractFetchBaseModel {
	timeout: number = 3000;
	constructor(params: object) {
		super(params);
	}
	private _setGen() {
		console.log(this.token);
	}
	fetch(params: object) {
		this._setGen();
		console.log(params);
		console.log(`fetching apis... in ${this.timeout}ms`);
	}
	abort() {
		console.log('fetch aborted');
	}
}

let fetchOrderModel = new FetchBaseModel({url: '/apis/list'});
let curInfo = fetchOrderModel.getFetchInfo();
console.log(curInfo);
fetchOrderModel.fetch({uid: 13123123, queryStr: 'fsdfsdf'});
fetchOrderModel.abort();
// fetchOrderModel._setGen(); // error 不可访问