function Student(name, gender, score) {
    this.name = name;
    this.gender = gender;
    this.score = score;
    this.qulity = 100;
    this.sumScore = function() {
        return this.score + this.qulity;
    };
}

let w = new Student('王', 89, '女');
console.log(w.name);

class Students {
    constructor(name, gender, score) {
        this.name = name;
        this.gender = gender;
        this.score = score;
        this.qulity = 100;
    }
    sumScore() {
        return this.score + this.qulity;
    }
}
let l = new Students('李', '女', 89);
console.log(l.sumScore());
