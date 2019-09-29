class Restaurant {
    static getMenu(menu) {
        switch (menu) {
            case '鱼香肉丝':
                return new YuXiangRouSi();
            case '宫保鸡丁':
                return new GongBaoJiDing();
            default:
                throw new Error('这个菜本店没有 -。-');
        }
    }
}
/**
 *  鱼香肉丝类
 */
class YuXiangRouSi {
    constructor() {
        this.type = '鱼香肉丝';
    }
    eat() {
        console.log(this.type + '真香');
    }
}

/**
 * 宫保鸡丁类
 */
class GongBaoJiDing {
    constructor() {
        this.type = '宫保鸡丁';
    }
    eat() {
        console.log(this.type + '来了');
    }
}

let A = Restaurant.getMenu('鱼香肉丝');
A.eat();

let b = Restaurant.getMenu('hahha');
