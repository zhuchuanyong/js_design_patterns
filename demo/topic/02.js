/**
 * 某停车场  分3层 每层100车位
 * 每个车位都能监控到车辆的驶入和离开
 * 车辆进入前 显示每层的空余车位数量
 * 车辆进入时 摄像头可识别车牌号和时间
 * 车辆出来时,出口显示器显示车牌号和停车时长
 */

/**
 * 车辆
 */
class Car {
    /**
     *
     * @param {number} num  车牌号
     */
    constructor(num) {
        this.num = num;
    }
}

/**
 * 摄像头
 */
class Camera {
    shot(car) {
        return {
            num: car.num,
            imTime: Date.now()
        };
    }
}

/**
 * 屏幕
 */
class Screen {
    /**
     *
     * @param {Car} car  车
     * @param {Date} inTime
     */
    show(car, inTime) {
        console.log('车牌号', car.num);
        console.log('停车时间', Date.now() - inTime);
    }
}

/**
 * 停车场
 */
class Park {
    constructor(floors) {
        this.floors = floors || [];
        this.carList = {}; // 存储摄像头返回的信息
        this.camera = new Camera();
        this.screen = new Screen();
    }
    // 驶入
    in(car) {
        //通过摄像头获取信息
        const info = this.camera.shot(car);
        // 停到某个停车位
        const i = parseInt((Math.random() * 100) % 100);

        const place = this.floors[0].places[i];
        place.in();
        info.place = place;
        // 记录信息
        this.carList[car.num] = info;
    }
    // 使出
    out(car) {
        // 获取信息
        const info = this.carList[car.num];
        // 将停车位清空
        const place = info.place;
        place.out();
        // 显示时间
        this.screen.show(car, info.inTime);
        // 清空记录
        delete this.carList[car.num];
    }
    emptyNum() {
        return this.floors.map(floor => {
            return `${floor.index}层还有${floor.emptyPlaceNum()}车位`;
        });
    }
}
/**
 * 层
 */
class Floor {
    /**
     *
     * @param {number} index  层数
     * @param {Array} places 车位数
     */
    constructor(index, places) {
        this.index = index;
        this.places = places || [];
    }
    emptyPlaceNum() {
        let num = 0;
        this.places.forEach(p => {
            if (p.empty) {
                num = num + 1;
            }
        });
        return num;
    }
}

/**
 * 车位
 */
class Place {
    /**
     *
     */
    constructor() {
        // 是否空位
        this.empty = true;
    }
    /**
     * 进入
     */
    in() {
        this.empty = false;
    }
    /**
     * 使出
     */
    out() {
        this.empty = true;
    }
}

const floors = [];
for (let i = 0; i < 3; i++) {
    const places = [];
    for (let j = 0; j < 100; j++) {
        places[j] = new Place();
    }
    floors[i] = new Floor(i + 1, places);
}
const park = new Park(floors);

// 初始化车辆
const car1 = new Car(100);
const car2 = new Car(200);
const car3 = new Car(300);
console.log('第一辆车进入');
console.log(park.emptyNum());
park.in(car1);
console.log('第2辆车进入');
console.log(park.emptyNum());
park.in(car2);
console.log('第一辆车离开');
park.out(car1);
console.log('第2辆车离开');
park.out(car2);
console.log('第3辆车进入');
console.log(park.emptyNum());
park.in(car3);
console.log('第3辆车离开');
park.out(car3);
