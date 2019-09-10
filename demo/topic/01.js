/**
 * 打车时,可以打专车或者快车 任何车都有车牌号和名称
 * 不同车价格不同,快车每公里一元,专车每公里2元
 * 行程开始 显示车辆信息
 * 行程结束 显示打车金额  假定行程就5公里
 */

/**
 * 车 父类
 */
class Car {
    /**
     *
     * @param {number} number 车牌
     * @param {string} name  车名
     */
    constructor(number, name) {
        this.number = number;
        this.name = name;
    }
}

/**
 * 快车
 */
class Kuaiche extends Car {
    constructor(number, name) {
        super(number, name);
        this.price = 1;
    }
}
/**
 * 专车
 */
class Zhuanche extends Car {
    constructor(number, name) {
        super(number, name);
        this.price = 2;
    }
}

/**
 * 行程
 */

class Trip {
    /**
     *
     * @param {Car} car
     */
    constructor(car) {
        this.car = car;
    }
    /**
     *
     */
    start() {
        console.log(`行程开始,名称${this.car.name},车牌号: ${this.car.number}`);
    }
    end() {
        console.log(`行程结束, 金额:` + this.car.price * 5);
    }
}

let car = new Kuaiche(100, '桑塔纳');
let trip = new Trip(car);
trip.start();
trip.end();
let car2 = new Zhuanche(120, '宝马');
let trip2 = new Trip(car2);
trip2.start();
trip2.end();
