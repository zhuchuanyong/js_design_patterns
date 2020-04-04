/**
 * @todo
 *  ! 打车时,可以打专车或者快车 任何车都有车牌号和名称
 *  ! 不同车价格不同,快车每公里一元,专车每公里两元
 *  ! 行程开始,显示车辆信息
 *  ! 行程结束,显示打车金额(假定行程就5公里)
 */


/**
 * 车 父类
 */
class Car {
    number: number;
    name: string;
    /**
     * 
     * @param number 车牌号
     * @param name 车名称
     */
    constructor(number: number, name: string) {
        this.name = name
        this.number = number
    }
}

/**
 * @extends Car
 */
class Kuaiche extends Car {
    price: number
    /**
     * 
     * @param number 车牌号
     * @param name 车名称
     * @param price 价格
     */
    constructor(number: number, name: string, price: number = 1) {
        super(number, name)
        this.price = price
    }
}

/**
 * @extends Car
 */
class Zhuanche extends Car {
    price: number
    /**
     * 
     * @param number 车牌号
     * @param name 车名称
     * @param price 价格
     */
    constructor(number: number, name: string, price: number = 1) {
        super(number, name)
        this.price = price
    }
}

/**
 * 行程
 */
class Trip {
    car: Kuaiche | Zhuanche;
    constructor(car: Kuaiche | Zhuanche) {
        this.car = car
    }
    start() {
        console.log(`行程开始, 名称:${this.car.name},车牌号:${this.car.number}`)
    }
    end() {
        console.log(`行程结束, 金额:${this.car.price * 5}`)
    }
}

let car = new Kuaiche(100, '大奔')
let trip = new Trip(car)
trip.start()
trip.end()