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
    constructor(num) {
        this.num = num;
    }
}

/**
 * 停车场
 */
class Park {
    constructor(floors) {
        this, (floors = floors || []);
    }
    in(car) {}
    out(car) {}
}
