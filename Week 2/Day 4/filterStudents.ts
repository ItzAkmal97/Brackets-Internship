enum GradeLevel {
    Freshman = 1,
    Sophomore,
    Junior,
    Senior
  }
  
  class Student {
    constructor(
      public name: string,
      public age: number,
      public grade: GradeLevel,
      public score: number
    ) {}
  }
  
  class Students {
    private studentsList: Student[] = [];
  
    constructor() {}
  
  
    addStudent(name: string, age: number, grade: GradeLevel, score: number): void {
      const newStudent = new Student(name, age, grade, score);
      this.studentsList.push(newStudent);
      console.log(`Student ${name} has been added.`);
    }
  
    filterStudents<T>(criteria: (student: Student) => T): Student[] {
      return this.studentsList.filter(criteria);
    }
  
  }
  
  const manager = new Students();
  manager.addStudent("Akmal", 25, GradeLevel.Junior, 85);
  manager.addStudent("Ahmad", 28, GradeLevel.Senior, 55);
  manager.addStudent("Ali", 22, GradeLevel.Freshman, 70);
  manager.addStudent("Sara", 20, GradeLevel.Sophomore, 90);
  
  const passingStudents = manager.filterStudents(student => student.score >= 60);
  console.log("\nPassing Students:");
  passingStudents.forEach(student => {
    console.log(`Name: ${student.name}, Score: ${student.score}`);
  });
  
  const sophomores = manager.filterStudents(student => student.grade === GradeLevel.Sophomore);
  console.log("\nSophomore Students:");
  sophomores.forEach(student => {
    console.log(`Name: ${student.name}, Age: ${student.age}`);
  });
  