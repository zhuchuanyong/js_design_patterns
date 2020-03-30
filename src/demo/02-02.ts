// 工厂模式 demo2

/* 鱼香肉丝类 */
// class YuXiangRouSi {
//     typeName: string = '鱼香肉丝';
//     eat(): void {
//         console.log(`${this.typeName}----------eat`);
//     }
// }
// /* 宫保鸡丁类 */
// class GongBaoJiDin {
//     typeName: string = '宫爆鸡丁';
//     eat(): void {
//         console.log(`${this.typeName}----------eat`);
//     }
// }

// /* 饭店方法 */
// class Restaurant {
//     static getMenu(menu: string) {
//         switch (menu) {
//             case '鱼香肉丝':
//                 return new YuXiangRouSi();

//             case '宫爆鸡丁':
//                 return new GongBaoJiDin();
//             default:
//                 break;
//         }
//     }
// }

// const guke=Restaurant.getMenu('鱼香肉丝')
// const guke2=Restaurant.getMenu('宫爆鸡丁')

// guke?.eat()
// guke2?.eat()



/**
 * !抽象工厂模式
 */
/* 菜品抽象类 */
abstract class Dish {
    abstract eat(): void;
}

/* 鱼香肉丝类 */
class YuXiangRouSi extends Dish{
    typeName: string = '鱼香肉丝';
    eat(): void {
        console.log(`${this.typeName}----------eat`);
    }
}
/* 宫保鸡丁类 */
class GongBaoJiDin extends Dish {
    typeName: string = '宫爆鸡丁';
    eat(): void {
        console.log(`${this.typeName}----------eat`);
    }
}

/* 饭店方法 */
class Restaurant {
    static getMenu(menu: string) {
        switch (menu) {
            case '鱼香肉丝':
                return new YuXiangRouSi();

            case '宫爆鸡丁':
                return new GongBaoJiDin();
            default:
                break;
        }
    }
}

const guke=Restaurant.getMenu('鱼香肉丝')
const guke2=Restaurant.getMenu('宫爆鸡丁')

guke?.eat()
guke2?.eat()
