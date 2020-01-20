/**
 *  工厂模式
 * 1. 将new 操作单独封装
 */

class Product {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    init() {
        console.log('init');
    }
    fn1() {
        console.log('fn1');
    }
    fn2() {
        console.log('fn2');
    }
}
/**
 * 工厂
 */
class Creator {
    create(name: string) {
        return new Product(name);
    }
}

let creater = new Creator();
let p = creater.create('p1');
p.init();
p.fn1();
p.fn2();
