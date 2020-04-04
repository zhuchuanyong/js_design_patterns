// 添加方法
function mixins(...list: any) {
    return (target: any) => {
        Object.assign(target.prototype, ...list)
    }
}
const method = {
    prString(str: string = '我是谁') {
        console.log(str)
    }
}

@testable
@testableB('aaaaa')
@mixins(method)
class MyTestableClass {

    static a: string
    static b: string
    // ...
}
function testable(target: any) {
    console.log(target)
    target.a = '1324'
}
function testableB(isb: any) {
    return (target: any) => {
        target.b = isb
    }
}

// MyTestableClass.isTestable; // true
console.log(MyTestableClass.a)
console.log(MyTestableClass.b)
let s = new MyTestableClass()
// console.log(s.prString())
