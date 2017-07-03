// ts的数据类型
// boolean
let isBoy: boolean = false;

// number
let age: number = 23;

// string(name是关键字)
let nm: string = 'Bear';

// array
// 经典c型
let favs: string[] = ['football', 'coding', 'jser'];
// 数组泛型
let tags: Array<string> = ['大帅比', '大神', '叼叼'];
// 元组 Tuple, 元组中的各个元素数据类型不必相同
let tupleArr: [string, number, boolean] = ['hello', 23, true];
// 下面的赋值会报错, 对应的索引必须对应相同的数据类型
// tupleArr[2] = 'bear'; 

// enum枚举
enum Colors {Red = '#cd0000', Orange = '#ff6600'};
let bgColor: string = Colors.Orange;
// console.log(bgColor);

// 任意值类型
let anyTypeVar: any = 4;
anyTypeVar = "string";
console.log(anyTypeVar);

// 空类型(void 类似c)