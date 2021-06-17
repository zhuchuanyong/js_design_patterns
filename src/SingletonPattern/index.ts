class Singleton  {
    private static _instance :Singleton
    private constructor() {} //设置构造函数private，防止new实例化
    static getInstance():Singleton{
        if(!this._instance){
            this._instance=new Singleton();
        }
        return this._instance
    }
}