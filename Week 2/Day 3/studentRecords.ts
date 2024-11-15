class Student{
    constructor(
        public studentId: number,
        public name: string,
        public age: number,
        public grade: string
    ){}  
}

class StudentRecordsManager{
    private students: Student[] = []

    addStudent(studentId: number, name: string, age: number, grade: string): void{
        const existingStudent = this.students.find((student) => student.studentId === studentId);
        if(existingStudent){
            console.log(`Student with the ID ${studentId} already exists`);
        } else {
            this.students.push(new Student(studentId, name, age, grade));
        }
    }

    retreiveStudentById(studentId: number){
        const student = this.students.find((student) => student.studentId === studentId);
        if(student){
            console.log(`Name: ${student.name}, Age: ${student.age}, Grade ${student.grade}`)
        } else {
            console.log(`Student with the Id ${studentId} not found`);
        }
    }

    retrieveAllStudentData(): void {
        if (this.students.length === 0) {
          console.log("No students in the records.");
        } else {
          console.log("All Student Records:");
          this.students.forEach((student) => {
            console.log(`ID: ${student.studentId}, Name: ${student.name}, Age: ${student.age}, Grade: ${student.grade}`);
          });
        }
      }
}

const manager = new StudentRecordsManager();

manager.addStudent(1, "Akmal", 25, "A");
manager.addStudent(1, "Ahmad", 25, "A");
manager.addStudent(3, "Ali", 25, "A");
manager.retreiveStudentById(1);
manager.retrieveAllStudentData();

