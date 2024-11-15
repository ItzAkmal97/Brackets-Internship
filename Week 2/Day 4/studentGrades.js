var GradeLevel;
(function (GradeLevel) {
    GradeLevel[GradeLevel["Freshman"] = 1] = "Freshman";
    GradeLevel[GradeLevel["Sophomore"] = 2] = "Sophomore";
    GradeLevel[GradeLevel["Junior"] = 3] = "Junior";
    GradeLevel[GradeLevel["Senior"] = 4] = "Senior";
})(GradeLevel || (GradeLevel = {}));
var Students = /** @class */ (function () {
    function Students() {
        this.studentsList = [];
    }
    Students.prototype.gradeCategorized = function (name, age, grade) {
        if (grade < 1 || grade > 4) {
            console.log("Invalid input for student name ".concat(name, ". Grade must be between 1 and 4."));
            return;
        }
        var newStudent = { name: name, age: age, grade: grade };
        this.studentsList.push(newStudent);
        console.log("".concat(name, " has been added as a ").concat(GradeLevel[grade], "."));
    };
    return Students;
}());
var manager = new Students();
manager.gradeCategorized("Akmal", 25, 3);
manager.gradeCategorized("Ahmad", 28, 4);
manager.gradeCategorized("Ali", 22, 1);
manager.gradeCategorized("Hamza", 22, 5);
