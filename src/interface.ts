// 接口 interface, TypeScript的核心
// typescript即使变量类型不对，也是可以成功地编译成js的, 因为js是弱类型
// 所以要注意一下, 编译阶段会有报错, 单编译后仍然可以运行的情况
// 如果接口中的字段没有规定选填项, 传入的值没有相应字段时，也是不行的
interface UserInfoModel {
	// 设置readonly属性, 则该值只能在创建之初赋值, 之后便不可更改
	readonly uid?: number,
	// 设置选填属性, 则interface中可以不填入该值
	uNm?: string,
	token: string
}

function queryUserInfo(userInfo: UserInfoModel) {
	console.log(userInfo.token);
	userInfo.token = 'hello world';
	console.log(userInfo.token);
	// userInfo.uid = 123123123; // 在ts中修改readonly属性的值会报错
	console.log(userInfo);
}

let mockUserInfo = {
	uid: 32151324,
	token: 'sdfhlkjaspd0i'
}

// queryUserInfo(mockUserInfo);
// let opts = {oid: 158364564, token: 'sdasd321321s'};
// queryUserInfo(opts);

// 只读数组
let arr: number[] = [1,2,3,4,5];
let readOnlyArr: ReadonlyArray<number>;

readOnlyArr = arr;
// readOnlyArr[0] = 12; // error
// arr = readOnlyArr; // error
// readonly 与 const
// 只读属性用readonly, 变量用const

// interface的额外属性检查
interface OrderInfoModel {
	oid: number,
	payment?: number,
	// 添加额外属性检查, 可以让所有不属于oid、payment的属性值接收传入, 而且不报错
	[propName: string]: any
}

function queryOrderInfo(info: OrderInfoModel): void {
	console.log(info);
}

// queryOrderInfo({oid: 18, uid: 25});

// interface 函数类型(接口只是定义了一套类型, 需要放到具体的函数或者类中去实现)
interface PrdListModel {
	uid: Number,
	queryStr: String,
	udt: Date,
	isNow: Boolean,
	fetchQuery(str: String): Object,
	fetchCancel(isFetching: Boolean): Boolean
}

// 接口的具体实现
let model: PrdListModel = {
	uid: 0,
	queryStr: '',
	udt: new Date(),
	isNow: false,
	fetchQuery(queryString) {
		console.log(queryString);
		return {}
	},
	fetchCancel(isFetching) {
		console.log(isFetching);
		if(isFetching) {
			isFetching = false;
		}
		return true;
	}
}

function asyncQueryProd(queryModel: PrdListModel): void {
	let isFetch = false;
	queryModel.uid = 123132465;
	queryModel.queryStr = '泰国曼谷';
	queryModel.fetchCancel(isFetch);
	queryModel.fetchQuery(queryModel.queryStr);
}

asyncQueryProd(model);