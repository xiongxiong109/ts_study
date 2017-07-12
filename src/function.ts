// ts中的函数，函数作用域与闭包
/*
	函数类型包含两部分：参数类型和返回值类型
*/
/*
	这是一个完美类型的函数, 声明一个变量类型为函数类型
	函数类型包含两个number类型的变量，其返回值是一个number类型
	然后给这个函数类型的变量赋值为一个匿名函数, 匿名函数的具体实现为
	两个number 类型的形参，一个number 类型的返回
*/
let firstTsFn: (x: number, y: number) => number = 
function(a: number, b: number): number {
	let c = 150;
	return a + b + c;
}

// 上下文归类, 类型声明只在一边有的话, 另外一边只要一一对应, 是可以自动推断出来的
let secondTsFn: (x: number) => string = 
function(x) {
	let c = x.toString();
	return c + ' second';
}

// 赋值的时候先声明才可以, 后声明是不行滴
// let thirdTsFn = (x) => x =
// function(a: string): string{
// 	return a;
// }

// 可选参数与默认参数(函数参数不能既是可选参数，又有默认值)
/*
	可选参数必须放在必填参数后面
	默认参数不一定要放在必填参数后面，但是如果放在前面的默认参数不填
	则必须明确指定为undefined
*/
function showMask(msg: string, needCls?: boolean): void {
	console.log(`${msg} is ${needCls}`);
}

// showMask('Hello');

function showDefaultMask(msg: string, needCls = false): void {
	console.log(`${msg} is ${needCls}`);
}

// 剩余参数, 可以将剩余参数收集到一个集合中(_.omit的实现)

// 定义一个集合方法接口
interface collectionMethods {
	omit(obj: object, ...restArgs: string[]):object;
}
class underscore implements collectionMethods {
	// 在类中实现这个接口方法
	omit(obj:any, ...restArgs: string[]):object {
		for (let key in obj) {
			if (restArgs.indexOf(key) >= 0) {
				delete obj[key];
			}
		}
		return obj;
	}
}

// let _ = new underscore();

// let obj1: any = {
// 	'_id': '3a2sd13as2d',
// 	'token': 'sdasd2asdf321',
// 	'unm': 'xiongxsas',
// 	'age': 12
// }

// console.log(_.omit(obj1, '_id', '_token'));

// test, 这样的尝试是不可取的, 剩余参数只能是最后一个形参, 没有中间参数的概念
// function showArgs(firstArg: string, ...middleArgs: string[], lastArg: string):void {
// 	console.log(firstArg);
// 	console.log(middleArgs.join(' '));
// 	console.log(lastArg);
// }