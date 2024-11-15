var GradeLevel;
(function (GradeLevel) {
    GradeLevel[GradeLevel["Freshman"] = 1] = "Freshman";
    GradeLevel[GradeLevel["Sophomore"] = 2] = "Sophomore";
    GradeLevel[GradeLevel["Junior"] = 3] = "Junior";
    GradeLevel[GradeLevel["Senior"] = 4] = "Senior";
})(GradeLevel || (GradeLevel = {}));
var Student = /** @class */ (function () {
    function Student(name, age, grade, score) {
        this.name = name;
        this.age = age;
        this.grade = grade;
        this.score = score;
    }
    return Student;
}());
var Students = /** @class */ (function () {
    function Students() {
        this.studentsList = [];
    }
    Students.prototype.addStudent = function (name, age, grade, score) {
        var newStudent = new Student(name, age, grade, score);
        this.studentsList.push(newStudent);
        console.log("Student ".concat(name, " has been added."));
    };
    Students.prototype.filterStudents = function (criteria) {
        return this.studentsList.filter(criteria);
    };
    return Students;
}());
var manager = new Students();
manager.addStudent("Akmal", 25, GradeLevel.Junior, 85);
manager.addStudent("Ahmad", 28, GradeLevel.Senior, 55);
manager.addStudent("Ali", 22, GradeLevel.Freshman, 70);
manager.addStudent("Sara", 20, GradeLevel.Sophomore, 90);
var passingStudents = manager.filterStudents(function (student) { return student.score >= 60; });
console.log("\nPassing Students:");
passingStudents.forEach(function (student) {
    console.log("Name: ".concat(student.name, ", Score: ").concat(student.score));
});
var sophomores = manager.filterStudents(function (student) { return student.grade === GradeLevel.Sophomore; });
console.log("\nSophomore Students:");
sophomores.forEach(function (student) {
    console.log("Name: ".concat(student.name, ", Age: ").concat(student.age));
});
