marks =prompt("Enter student's marks:");

if (marks >= 90 && marks <= 100) {
    console.log("Grade: A+");
} else if (marks >= 80) {
    console.log("Grade: A");
} else if (marks >= 70) {
    console.log("Grade: B");
} else if (marks >= 60) {
    console.log("Grade: C");
} else if (marks >= 50) {
    console.log("Grade: D");
} else {
    console.log("Grade: Fail");
}


number = prompt("Enter an integer:");

if (number % 2 == 0) {
    console.log(number + " is Even");
} else {
    console.log(number + " is Odd");
}


number = prompt("Enter a number for multiplication table:");

console.log("Multiplication Table of " + number + ":");

for (let i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + (number * i));
}


let n = prompt("Enter N:");
let sum = 0;

for (let i = 1; i <= n; i++) {
    sum = sum + i;
}

console.log("Sum = " + sum);

num1 = prompt("Enter first number:");
num2 = prompt("Enter second number:");
num3 = prompt("Enter third number:");



if (num1 >= num2 && num1 >= num3) {
    largest = num1;
} else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
} else {
    largest = num3;
}

console.log("Largest number is: " + largest);