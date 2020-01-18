class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    eat() {
        console.log(`${this.name} eat something`)
    }
    speak() {
        console.log(`my name is ${this.age}, age ${this.age}`)
    }
}
let zhang = new Person('zhang', 20)
zhang.eat()
zhang.speak()
let wang = new Person('wang', 21)
wang.eat()
wang.speak()
