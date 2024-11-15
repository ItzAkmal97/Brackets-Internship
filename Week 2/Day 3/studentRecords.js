var Student = /** @class */ (function () {
    function Student(studentId, name, age, grade) {
        this.studentId = studentId;
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    return Student;
}());
var StudentRecordsManager = /** @class */ (function () {
    function StudentRecordsManager() {
        this.students = [];
    }
    StudentRecordsManager.prototype.addStudent = function (studentId, name, age, grade) {
        var existingStudent = this.students.find(function (student) { return student.studentId === studentId; });
        if (existingStudent) {
            console.log("Student already exists");
        }
        else {
            this.students.push(new Student(studentId, name, age, grade));
        }
    };
    StudentRecordsManager.prototype.retreiveStudentById = function (studentId) {
        var student = this.students.find(function (student) { return student.studentId === studentId; });
        if (student) {
            console.log("Name: ".concat(student.name, ", Age: ").concat(student.age, ", Grade ").concat(student.grade));
        }
        else {
            console.log("Student with the Id ".concat(studentId, " not found"));
        }
    };
    StudentRecordsManager.prototype.retrieveAllStudentData = function () {
        if (this.students.length === 0) {
            console.log("No students in the records.");
        }
        else {
            console.log("All Student Records:");
            this.students.forEach(function (student) {
                console.log("ID: ".concat(student.studentId, ", Name: ").concat(student.name, ", Age: ").concat(student.age, ", Grade: ").concat(student.grade));
            });
        }
    };
    return StudentRecordsManager;
}());
var manager = new StudentRecordsManager();
manager.addStudent(1, "Akmal", 25, "A");
manager.addStudent(2, "Ahmad", 25, "A");
manager.addStudent(3, "Ali", 25, "A");
manager.retreiveStudentById(1);
