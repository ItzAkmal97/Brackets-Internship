enum GradeLevel {
    Freshman = 1,
    Sophomore,
    Junior,
    Senior
  }
  
  class Students{
    private studentsList: {name:string, age: number, grade: GradeLevel}[] = [];
  
    constructor(){}
  
    gradeCategorized(name: string, age: number, grade: GradeLevel): void {
      if (grade < 1 || grade > 4) {
        console.log(`Invalid input for student name ${name}. Grade must be between 1 and 4.`);
        return;
      }
      
      const newStudent = { name, age, grade };
      this.studentsList.push(newStudent);
      console.log(`${name} has been added as a ${GradeLevel[grade]}.`);
      }
       
      filterStudents

    }
   
  
  const manager = new Students();
  manager.gradeCategorized("Akmal", 25, 3);
  manager.gradeCategorized("Ahmad", 28, 4);
  manager.gradeCategorized("Ali", 22, 1);
  manager.gradeCategorized("Hamza", 22, 5);
  
  
  
  
  
  
  
  