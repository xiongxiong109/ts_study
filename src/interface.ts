// 接口 interface, TypeScript的核心
// typescript即使变量类型不对，也是可以成功地编译成js的, 因为js是弱类型
// 所以要注意一下, 编译阶段会有报错, 单编译后仍然可以运行的情况
// 如果接口中的字段没有规定选填项, 传入的值没有相应字段时，也是不行的
interface UserInfoModel {
	// 设置readonly属性, 则该值只能在创建之初赋值, 之后便不可更改
	readonly uid: number,
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

queryUserInfo(mockUserInfo);