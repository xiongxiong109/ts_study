// 变量的声明与解构(var let const)

// var 与 let的经典区别
// for (var i = 0; i < 10; i++) {
// 	setTimeout(() => console.log(i), 30);
// }

// for (let i = 0; i < 10; i++) {
// 	setTimeout(() => console.log(i), 30);
// }

// const FETCH_LIST: string = 'CAR/FETCH_LIST';
// 会报错, const类型的值不能修改
// FETCH_LIST = 'OCH/';

// 解构
enum obj {cid = 108, cnm = 'shanghai'};

let {cid, cnm} = obj;
console.log(cid);

let arr1: Array<number> = [3, 4, 5];

let arr2 = [1, 2, ...(arr1 as Array<number>), 6];
console.log(arr2);