// ts module (module声明后, 需要在tsconfig.json中定义, 不然也不会出现在编译后的文件中)
// tsconfig.json的files中, 也可以指定**/*来匹配多个文件
import { sayHello } from './greet';

// ts中的变量声明, 自带类型(如果类型与赋值不一致, 编译会报错, 但是仍然会编译出来)
let greet: string = "hello";
let nm: string = "typescript";

sayHello(nm, greet);