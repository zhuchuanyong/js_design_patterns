/**
 * 产品
 */
class Product {
    constructor(name) {
        this.name = name;
    }
    init() {}
    fn1() {}
    fn2() {}
}

/**
 * 工厂
 */
class Creator {
    create(name) {
        return new Product(name);
    }
}

//测试

let creator = new Creator();
let p = creator.create('p1');
