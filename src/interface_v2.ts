// 定义复杂数据结构及多个类型

// interface QueryModel {
// 	// 给索引设置只读属性
// 	readonly [index: number]: string,
// 	length: number,
// 	name: string
// }

// let query: QueryModel = {
// 	0: "sdfsdf",
// 	1: "sfw233",
// 	3: "sdfsdfsdwe",
// 	length: 2,
// 	name: "bear"
// }

// console.log(query.name);

// 接口与类(接口中看到任何奇怪的写法都要想一哈, 这里只是一个抽象的声明)
interface ClockInterface {
	tick(): void;
}
// 构造函数接口
interface ClockConstructor {
	// 这句话的意思是, 这个接口定义了一个匿名构造函数, 传入参数为hour和minute
	// 函数的返回值类型是一个ClockInterface(即返回了一个函数tick())
	// 这里这样写, 是因为
	new (hour: number, minute: number): ClockInterface;
}

function CreateClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
	return new ctor(hour, minute);
}

// 类是具有两个类型的：静态部分的类型和实例的类型, 
// constructor存在于类的静态部分，所以不在检查的范围内。
// 类可以用来实现接口
class Clock implements ClockInterface {
	tick() {
		console.log('tick tick');
	}
	// constructor 和 实例部分的衔接之间没有分号
	constructor(h: number, m: number) { }
}

let c = CreateClock(Clock, 15, 23);

c.tick();