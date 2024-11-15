function calculateAverage(grades: number[]): number {
    let totalGrade: number = 0;
    if (grades.length > 0) {
      for (let i = 0; i < grades.length; i++) {
        totalGrade += grades[i]; // Corrected the total grade accumulation
      }
      return totalGrade / grades.length; // Calculate average outside the loop
    } else {
      return 0; // Return 0 if there are no grades
    }
  }
  
  function classifyGrade(grade: number): string {
    if (grade >= 90) {
      return "A";
    } else if (grade >= 80 && grade <= 89) { // Corrected logical operator
      return "B";
    } else if (grade >= 70 && grade <= 79) { // Corrected logical operator
      return "C";
    } else if (grade >= 60 && grade <= 69) { // Corrected logical operator
      return "D";
    } else {
      return "F";
    }
  }
  
  // Step 2: Main program logic
  const grades: number[] = [89, 78, 97, 65, 45, 33, 88];
  
  // Call the functions and log the results
  const average = calculateAverage(grades);
  console.log(`Average Grade: ${average.toFixed(1)}`); // Display average with one decimal place
  
  console.log("Classifications:");
  grades.forEach(grade => {
    console.log(`${grade}: ${classifyGrade(grade)}`);
  });
  