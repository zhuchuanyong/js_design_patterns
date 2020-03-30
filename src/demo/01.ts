// dan

/**
 * @method 单例模式-懒汉模式
 * !只有在调用 getInstance 的时候才会实例化 Singleton
 * ! 懒汉模式中单例是在需要的时候才去创建的，如果单例已经创建，再次调用获取接口将不会重新创建新的对象，而是直接返回之前创建的对象。
 * ! 如果某个单例使用的次数少，并且创建单例消耗的资源较多，那么就需要实现单例的按需创建
 */
class Singleton  {
    // private 私有
    private  static instance:Singleton
    static  getInstance(){
        return this.instance ||(this.instance=new Singleton())
    }
}

/**
 * @method 单例模式-饿汉模式
 * !1. 饿汉模式在类加载的时候就对实例进行创建，实例在整个程序周期都存在。
 * !2. 它的好处是只在类加载的时候创建一次实例, 适合单例占用内存比较小，在初始化时就会被用到的情况
 * !3. 它的缺点也很明显，即使这个单例没有用到也会被创建，而且在类加载之后就被创建，内存就被浪费了
 */
class Singleton2 {
    private  static instance:Singleton =new Singleton2()
    static getInstance() {
        return this.instance;
    }
}