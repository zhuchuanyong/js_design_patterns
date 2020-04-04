//目标接口:当前系统业务所期待的接口
interface TargetA {
    requestA(): void
}
//适配者:它是被访问和适配的现存组件库中的组件接口。
class Adaptee {
    public specificRequest(): void {
        console.log("适配者中的业务代码被调用！")
    }
}
//适配器:它是一个转换器
class ClassAdapterA extends Adaptee implements TargetA {
    requestA() {
        this.specificRequest()
    }
}
//客户端代码
class Client {
    public static main(): void {
        const target: TargetA = new ClassAdapterA()
        target.requestA()
    }
}
Client.main()	//适配者中的业务代码被调用！
