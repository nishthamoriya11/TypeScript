
// Question 1

let myName: string = "Nishtha";
let age: number = 19;
let city: string = "Surat";

console.log("Name: ", myName);
console.log("Age: ", age);
console.log("City: ", city);

console.log("--------------------------------");

// Question 2

let a: number = 20;
let b: number = 5;

console.log("Addition: ", a + b);
console.log("Subtraction: ", a - b);
console.log("Multiplication: ", a * b);
console.log("Division: ", a / b);

console.log("--------------------------------");

// Question 3
let msg: string= "Welcome to learn JaavScript";
console.log(msg);
document.getElementById("demo")!.innerHTML=msg;

console.log("--------------------------------");

// Question 4

let num: number = 4;

console.log("Number: ", num);
console.log("Square: ", num * num);
console.log("Cube: ", num * num * num);

console.log("--------------------------------");

// Question 5

let len: number = 10;
let width: number = 5;

let area: number = len * width;

console.log("Length: ", len);
console.log("Width: ", width);
console.log("Area of Rectangle: ", area);

console.log("--------------------------------");

// Question 6


let studentNamename: string = "nishtha";
let marks: number = 95;
let isPass: boolean = true;

console.log("Name: ", studentNamename, " | Type", typeof studentNamename);
console.log("Marks: ", marks, " | Type", typeof marks);
console.log("Result: ", isPass, " | Type", typeof isPass);

console.log("--------------------------------");

// Question 7

let value: any;

value = "Nishtha";
console.log(value, "| Type", typeof(value));

value = 100;
console.log(value, "| Type", typeof(value));

value = true;
console.log(value, "| Type", typeof(value));

console.log("--------------------------------");

// Question 8

let x1: String = "250";

console.log(x1, "| Type", typeof(x1));
console.log("Result: ", Number(x1) + 50);

console.log("--------------------------------");

// Question 9

let x2: number = 500;

console.log(x2, "| Type", typeof(x2));

let covert_x2: string = String(x2);

console.log(covert_x2, "| Type", typeof(covert_x2));

console.log("--------------------------------");

// Question 10

let str1: string = "100";
let str2: string = "200";

console.log("First string: ", str1);
console.log("Second string: ", str2);

let sum: number = Number(str1) + Number(str2);

console.log("Addition: ", sum);

console.log("--------------------------------");

// Question 11

let num1: number = 20;
let num2: number = 6;

console.log("Addition: ", num1 + num2);
console.log("Subtraction: ", num1 - num2);
console.log("Multiplication: ", num1 * num2);
console.log("Division: ", num1 / num2);
console.log("Modulus: ", num1 % num2);

console.log("--------------------------------");

// Question 12

let n: number = 5;
let m: number = 2;
let z: number;

console.log("First digit: ", n, " | Second digit: ", m);

z = m;
m = n;
n = z;

console.log("First digit: ", n, " | Second digit: ", m);

console.log("--------------------------------");

// Question 13

let n1: number = 6;
let m1: number = 8;

console.log("First digit: ", n1, " | Second digit: ", m1);

n1 = m1 + n1;
m1 = n1 - m1;
n1 = n1 - m1;

console.log("First digit: ", n1, " | Second digit: ", m1);

console.log("--------------------------------");

// Question 14

let studentMarks: number = 75;

if (studentMarks >= 80) {
    console.log("Grade A");
}
else if (studentMarks >= 60) {
    console.log("Grade B");
}
else {
    console.log("Grade C");
}

console.log("--------------------------------");

// Question 15

let units: number = 150;
let bill: number;

if (units <= 100) {
    bill = units * 5;
}
else {
    bill = units * 8;
}

console.log("Units consumed: ", units);
console.log("Electricity Bill: Rs.", bill);

console.log("--------------------------------");

// Question 16

let basicSalary: number = 20000;
let hra: number = basicSalary * 10 / 100;
let da: number = basicSalary * 5 / 100;

let totalSalary: number = basicSalary + hra + da;

console.log("Basic Salary: ", basicSalary);
console.log("HRA: ", hra);
console.log("DA: ", da);
console.log("Total Salary: ", totalSalary);

console.log("--------------------------------");

// Question 17

let personAge: number = 19;

if (personAge >= 18) {
    console.log("Eligible for voting");
}
else {
    console.log("Not eligible for voting");
}

console.log("--------------------------------");

// Question 18

let purchaseAmount: number = 6000;
let discount: number;
let finalAmount: number;

if (purchaseAmount > 5000) {
    discount = purchaseAmount * 15 / 100;
}
else {
    discount = purchaseAmount * 5 / 100;
}

finalAmount = purchaseAmount - discount;

console.log("Purchase Amount: ", purchaseAmount);
console.log("Discount: ", discount);
console.log("Final Amount: ", finalAmount);

console.log("--------------------------------");

// Question 19

let celsius: number = 25;

let fahrenheit: number = (celsius * 9 / 5) + 32;

console.log("Temperature in Celsius: ", celsius);
console.log("Temperature in Fahrenheit: ", fahrenheit);

console.log("--------------------------------");

// Question 20

let totalMinutes: number = 135;

let hours: number = Math.floor(totalMinutes / 60);
let remainingMinutes: number = totalMinutes % 60;

console.log("Total Minutes: ", totalMinutes);
console.log("Hours: ", hours);
console.log("Remaining Minutes: ", remainingMinutes);

console.log("--------------------------------");
