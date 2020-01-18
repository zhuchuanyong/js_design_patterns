class Person {
    name: string;
    age: number;
    protected weight: number;
    constructor(name: string, age: number, weight: number) {
        this.name = name
        this.age = age
        this.weight = weight
    }
    eat() {
        console.log(`${this.name} eat something`)
    }
    speak() {
        console.log(`my name is ${this.age}, age ${this.age}`)
    }
}
class Student extends Person {
    number: number;
    private girlfriend: string;
    constructor(name: string, age: number, weight: number, number: number, girlfriend: string) {
        super(name, age, weight)
        this.number = number
        this.girlfriend = girlfriend
    }
    study() {
        console.log(`${this.name} study`)
    }
    getWeight() {
        console.log(`${this.weight}`)
    }
}
let zhang = new Person('zhang', 20, 120)
zhang.eat()
zhang.speak()
console.log('---------')
let wang = new Student('wang', 21, 120, 370481, 'xiaoxiannv')
wang.eat()
wang.speak()
wang.study()
wang.getWeight()
