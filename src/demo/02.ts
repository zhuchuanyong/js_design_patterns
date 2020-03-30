// 工厂模式 demo1
// 定义工厂需要的动物特征
interface Feature {
    color:string,
    back():void
}

// 定义动物类型名字
type name ='cat'|'dog'

// implements 实现一个接口
// 创建 Cat 类
class Cat implements Feature  {
    color:string="白色"
    back(){
        console.log(`${this.color} 喵喵喵`)
    }
}

// 创建 Dog 类
class Dog implements Feature {
    color:string = "黑色";
    back() {
      console.log(`${this.color} 汪汪汪`);
    }
}


// 这就是一个动物工厂
class Animal {
    createAnimal(type: name) {
      switch (type) {
        case 'cat':
          return new Cat();
        case 'dog':
          return new Dog();
      }
    }
}

const animal=new Animal()
const cat=animal.createAnimal('cat')
const dog=animal.createAnimal('dog')
cat.back()
dog.back()


