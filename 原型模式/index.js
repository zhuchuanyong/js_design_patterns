function Student(name, gender, score) {
    this.name = name;
    this.gender = gender;
    this.score = score;
    this.qulity = 100;
}
Student.prototype.sumScore = function() {
    return this.score + this.qulity;
};
let w = new Student('王', 89, '女');
console.log(w.sumScore());
