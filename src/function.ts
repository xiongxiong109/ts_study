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