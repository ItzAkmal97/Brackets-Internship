// Basic Types
let isDone: boolean = false; // Boolean type
let age: number = 25; // Number type
let userName: string = "Akmal"; // String type

// Arrays
let numbers: number[] = [1, 2, 3, 4, 5]; // Array of numbers
let names: string[] = ["Alice", "Bob", "Charlie"]; // Array of strings

// Tuple (Fixed-length array with different types)
let person: [string, number] = ["John", 30];

// Enum (Named constants)
enum Color {
  Red,
  Green,
  Blue
}
let color: Color = Color.Green; // color = 1 (as Enums are 0-indexed)

let message: string = "Hello, TypeScript!";
console.log(message);

function sum(a:number, b:number): number{
    return a + b;
}

console.log(sum(2,2));
