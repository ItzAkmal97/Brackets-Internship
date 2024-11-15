// Basic Types
var isDone = false; // Boolean type
var age = 25; // Number type
var userName = "Akmal"; // String type
// Arrays
var numbers = [1, 2, 3, 4, 5]; // Array of numbers
var names = ["Alice", "Bob", "Charlie"]; // Array of strings
// Tuple (Fixed-length array with different types)
var person = ["John", 30];
// Enum (Named constants)
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var color = Color.Green; // color = 1 (as Enums are 0-indexed)
var message = "Hello, TypeScript!";
console.log(message);
function sum(a, b) {
    return a + b;
}
console.log(sum(2, 2));
