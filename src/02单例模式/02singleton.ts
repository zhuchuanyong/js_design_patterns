/**
 * 单例模式
 * 一个类只有一个实例,且只会实例化一次
 */

class Singleton {
    private static instance: Singleton;
    /**
     * 静态方法
     */
    private constructor() {}
    public static getInstance() {
        return function() {
            if (!Singleton.instance) {
                Singleton.instance = new Singleton();
            }
            return Singleton.instance;
        };
    }
    login() {
        console.log('login');
    }
}
let ob1 = Singleton.getInstance()();
console.log(ob1);
let ob2 = Singleton.getInstance()();
ob1.login();
console.log(ob1 === ob2);
