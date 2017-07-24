// 泛型
function identity<T>(arg: T): T {
	return arg;
}

/*
	泛型与any不同之处在于, any是任何类型
	而泛型则是保持部分参数类型一致，但不强制指定某个类型
*/
// 明确指定泛型类型
let a = identity<number>(6);
console.log(a);
// 使用类型推论, 自动推导类型
let b = identity('str');
console.log(b);