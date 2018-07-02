// 交叉类型

// 定义一个接口
interface Loggable {
  log(): void;
}

// 定义一个类来实现这个接口
class ConsoleLogger implements Loggable {
  log() {
    console.log('xx');
  }
}

class Person {
  nm: string;
  constructor(nm: string) {
    this.nm = nm;
  }
}

// 混合类型
function extend<A, B>(firstClass: A, secondClass: B): A & B {
  // 这里指定了一个混合类型 A & B, 那么返回结果也指定一个特定的类型即可
  let result = <A & B> {};
  for (let key in firstClass) {
    (<any>result)[key] = (<any>firstClass)[key]
  }
  for (let key in secondClass) {
    if (!result.hasOwnProperty(key)) {
      (<any>result)[key] = (<any>secondClass)[key];
    }
  }
  return result;
}

const superPerson = extend(new Person('Bear'), new ConsoleLogger());

export default superPerson;