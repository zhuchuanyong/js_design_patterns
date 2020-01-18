/**
 * @todo
 * ! 停车场,分三层,每层100车位
 * ! 每个车位都能监控车辆的驶入和离开
 * ! 车辆进入前,显示每层的空余车位数量
 * ! 车辆进入时,摄像头可识别车牌号和时间
 * ! 车辆出来时,出口显示器显示车牌号和停车时长
 */
interface info {
    num: number,
    inTime: number,
    place?: Place
}
/**
 * 车辆
 */
class Cars {
    num: number;
    /**
     * 
     * @param num 车牌号
     */
    constructor(num: number) {
        this.num = num
    }
}


/**
 * 摄像头
 */
class Camera {
    shot(car: Cars) {
        return {
            num: car.num,
            inTime: Date.now()
        }
    }
}

/**
 * 显示屏
 */
class Screens {
    show(car: Cars, inTime: number) {
        console.log('车牌号', car.num)
        console.log('停车时间', Date.now() - inTime)
    }

}
/**
 * 停车场
 */
class Park {

    floors: Floor[];
    camera: Camera;
    screen: Screens
    carList: info[];
    /**
     * 
     * @param floors 层数
     */
    constructor(floors: Floor[]) {
        this.floors = floors || []
        this.camera = new Camera()
        this.screen = new Screens()
        this.carList = [] // 存储摄像头拍摄返回的车辆信息
    }
    in(car: Cars) {

        // 通过摄像头获取信息
        const info: info = this.camera.shot(car)
        // 停到某个停车位
        const i: number = parseInt(String(Math.random() * 100 % 100))
        const place = this.floors[0].places[i]
        place.in()
        info.place = place
        // 记录信息
        this.carList[car.num] = info
    }
    out(car: Cars) {
        // 获取信息
        const info: info = this.carList[car.num]
        // 将停车位清空
        const place = info.place
        if (place) {
            place.out()
        }

        // 显示时间
        this.screen.show(car, info.inTime)
        // 清空记录
        delete this.carList[car.num]

    }
    emtpyNum() {
        return this.floors.map(floor => {
            return `${floor.index} 层还有 ${floor.emptyPlaceNum()}个空余车位`
        }).join('\n')
    }
}

/**
 * 层
 */
class Floor {
    index: number;
    places: Place[];
    /**
     * 
     * @param index 第几层
     * @param places  车位数量
     */
    constructor(index: number, places: Place[]) {
        this.index = index;
        this.places = places || [];
    }

    /**
     * 空余车位
     */
    emptyPlaceNum() {
        let num = 0;
        this.places.forEach((item) => {
            if (item.empty) {
                num = num + 1
            }
        })
        return num
    }
}

/**
 * 车位
 */
class Place {
    empty: boolean;
    constructor() {
        this.empty = true

    }
    /**
     * 进入车位 停车
     */
    in() {
        this.empty = false
    }
    /**
     * 离开车位
     */
    out() {
        this.empty = true
    }
}

const floors = []
for (let i = 0; i < 3; i++) {
    const places = []
    for (let j = 0; j < 100; j++) {
        places[j] = new Place()

    }
    floors[i] = new Floor(i + 1, places)
}

const park = new Park(floors)


const car1 = new Cars(370111)
const car2 = new Cars(3701112)
const car3 = new Cars(3701113)
const car4 = new Cars(3701114)

console.log('第一辆车进入')
console.log(park.emtpyNum())
park.in(car1)

console.log('第二辆车进入')
console.log(park.emtpyNum())
park.in(car2)

console.log('第一辆车离开')
park.out(car1)

console.log('第二辆车离开')
park.out(car2)

console.log('第三辆车进入')
console.log(park.emtpyNum())
park.in(car3)

console.log('第三辆车离开')
park.out(car3)