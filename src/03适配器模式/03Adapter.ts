// 适配器模式

class AdapterA {
    specificRequest() {
        return '德国标准插头';
    }
}

class Target {
    adatte: AdapterA;
    constructor() {
        this.adatte = new AdapterA();
    }
    request() {
        let info = this.adatte.specificRequest();
        return `${info}- 转换器- 中国标准插头`;
    }
}
