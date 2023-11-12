// alert ("This is a demo of alert tesing");

//variable lessons
var numVariable = 30;
var stringVariable = "Demo string variable";
var booleanVariable = true;
console.log(numVariable);
console.log(stringVariable);
console.log(booleanVariable);

//mathmatical operator lessons
var OP1 = 5;
var OP2 = 15;
var OP3 = 25;
var OP4 = 35;

var a = OP1 + OP2;
console.log(a);
var b = OP3 + OP2;
console.log(b);
var c = OP4 / OP1;
console.log(c);
var d = OP4 * OP1 * OP2 * OP3;
console.log(d);

//shorthand operators
var myVar = 10;
myVar = myVar + 5;
console.log(myVar);
myVar += 5;
console.log(myVar);
myVar -= 10;
console.log(myVar);
myVar /= 2;
console.log(myVar);
myVar *= 5;
console.log(myVar);
myVar++;
console.log(myVar);
myVar += 1;
console.log(myVar);
myVar++;
console.log(myVar);
++myVar;
console.log(myVar);

//lpgging into console
var myVar = "Tanveer";
document.write(myVar);
console.log(myVar);

// Boolean Test
var iLikeMeat = true;
console.log(iLikeMeat);

var iLikeMeat = false;
console.log(iLikeMeat);

c = 7 > 5;
console.log(c);

c = 7 < 5;
console.log(c);

// If statement
var youLikeMeat = true;

if (7 > 5) {
  document.write("This expression is true");
}

if (7 < 5) {
  document.write("This expression is false");
}
if (7 == 7) {
  document.write("This expression is true");
}

var myNum = 15;
if (myNum > 10) {
  document.write("My Num is greater");
} else {
  document.write("My num is equal");
}

// else if lessons

var myAge = 35;
if (myAge > 30) {
  document.write("You are more than 30");
} else if (myAge > 20) {
  document.write("You are more than 20");
} else if (myAge > 10) {
  document.write("You are more than 10");
} else {
  document.write("You are below 10!");
}

// comparison operator
var x = 4;
if (x == 5) {
  document.write("The number is correct");
} else {
  document.write("The number is not correct");
}

var x = "5";
if (x != 5) {
  document.write("The number is correct");
} else {
  document.write("The number is not correct");
}

if (x === 5) {
  document.write("The number is abs correct");
} else if (x === "5") {
  document.write("The string is abs correct ");
} else {
  document.write("Hoyni kichu");
}

//logical operator
var myAge = 25;
if (myAge >= 18 && myAge <= 30) {
  document.write("You are an adult");
} else {
  document.write("You are not eligible");
}

var myAge = "50";
if (myAge < 10 || myAge > 30 || myAge === 50) {
  document.write("You are a not allowed");
} else {
  document.write("You are allowed");
}

// While loop
var age = 5;
while (age < 10) {
  console.log("Your age is less than 10");
  age++;
}
document.write("You are now more than 10");

// for loop
for (age = 5; age < 15; age++) {
  console.log("Your age is less than 15");
}
document.write("You are more than 15 now");

// For loop extended with href
var links = document.getElementsByTagName("a");
for (i = 1; i < links.length; i++) {
  console.log("This is link number ", +i);
}
document.write("Äll the links have been displayed");

// Break and Continue loop
for (i = 0; i < 10; i++) {
  if (i === 5 || i === 3) {
    continue;
  }
  console.log(i);
  if (i === 7) {
    break;
  }
}
console.log("Ï have broken outta the loop");

// functions

function getAverage(a, b) {
  var average = (a + b) / 2;
  console.log(average);
}
getAverage(5, 6);

// Variable scope
// In the upper cide average is created inside a functionfunction
//so the variable can only used and called inside the function
// If I create a variable outside a specific function,
// I can use it globally anywhere.

// Numbers
var a = 5;
var b = 6;
console.log(a + b);

// but
var a = "5"; //here a is a string, not a number
var b = 6;

// To check the data type, we can use this function called "type of"
var a = 5;
var b = 6;
console.log(a + b);
console.log(typeof (a + b)); //it will show number in the debug console

var a = "6";
var b = 6;
console.log(a + b);
console.log(typeof (a + b)); //it will show string in the debug console

// Use of Math object in JS
console.log(Math.round(7.5));
console.log(Math.floor(7.5));
console.log(Math.ceil(7.5));
console.log(Math.max(7, 4, 9, 8));
console.log(Math.min(7, 4, 9, 8));
console.log(Math.PI);

// NaN Things
var a = "5";
var b = 6;
if (isNaN(a)) {
  console.log("This is a number");
} else {
  console.log("This is not a number");
}
// When ! is used infront of some object then it becomes negative.
// Like (!ifNan (a)) means "a is not a number and it is false" or "a is a number"

// Strings
var myString = "I am a demo string";
console.log(myString);

var myString = "I'm a demo string";
console.log(myString);
console.log(myString.length); //.length is to measure the length of the string
console.log(myString.toUpperCase());
console.log(myString.toLowerCase());
console.log(myString.indexOf("string")); //.indexOf is used to to search the position of that specific word

var myString = "I am a fun ninja string";

if (myString.indexOf("ninja") === -1) {
  console.log("the word ninja is not in the string");
} else {
  console.log(
    "the word string starts at position " + myString.indexOf("ninja")
  );
}

const num1 = parseInt(prompt("Enter your number: "));
if (num1 > 18) {
  console.log("Your number is grater than 18");
} else {
  console.log("Your number is less than 18");
}

const num = parseInt(prompt("Enter your number: "));
if (num % 2 === 0) {
  console.log("Your number is even");
} else {
  console.log("Your number is odd");
}

// Simple Calculator programme
let input1 = parseInt(prompt("Enter your number: "));
let input2 = parseInt(prompt("Enter your number: "));
let operation = prompt("Enter your operation (+, -, *, /): ");

if (operation === "+") {
  const result = input1 + input2;
  console.log("Result is " + result);
} else if (operation === "-") {
  const result = input1 - input2;
  console.log("Result is " + result);
} else if (operation === "*") {
  const result = input1 * input2;
  console.log("Result is " + result);
} else if (operation === "/") {
  if (input2 === 0) {
    console.log("Division by zero is not allowed");
  } else {
    const result = input1 / input2;
    console.log("Result is " + result);
  }
} else {
  console.log("Please enter valid operator: +,-,*,/");
}

// Problem 3: Fibonacci Sequence
let n = parseInt(prompt("Enter the number of Fibonacci terms you want: "));
let current = 1;
let previous = 0;
for (let i = 1; i < n; i++) {
  console.log("The current term is: ", current);
  let nextTerm = current + previous;
  // Update previous to the previous value of current.
  previous = current;

  // Update current to the newly calculated term.
  current = nextTerm;
}

// Prime number checker
let p = parseInt(prompt("Enter your number:"));
if (p > 1) {
  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(p); i++) {
    if (p % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(`${p} is a prime number.`);
  } else {
    console.log(`${p} is not a prime number.`);
  }
} else {
  console.log("Enter a number which is bigger than 1");
}

// Functions
function getAverage(a, b) {
  var average = (a + b) / 2;
  console.log(average);
}

getAverage(7, 12);

// To use the inside value out of the function, we need to return the main value.
// In that case,
function getAverage(a, b) {
  var average = (a + b) / 2;
  console.log(average);
  return average;
}

var myResult = getAverage(7, 12);
console.log("The value of the operation is:  " + myResult);

// Variable scope
//The difference between local and global variable is global variable can be used anywhere in the code
//whereas local variable can be used ONLY INSIDE the specific funtion
function getAverage(a, b) {
  var average = (a + b) / 2; //here average is a local variable
  console.log(average);
  return average;
}

var myResult = getAverage(7, 12); //here myResult is a global variable
console.log("The value of the operation is:  " + myResult);

function logResult() {
  console.log("The average is: " + myResult); // since myResult is a global variable. we have used it in another function
}
logResult();

// Working with numbers
// Just dont put "" within a number, else it will become a string

console.log(Math.round(7.5));
console.log(Math.floor(7.5));
console.log(Math.ceil(7.5));
console.log(Math.max(7, 4, 9, 8));
console.log(Math.min(7, 4, 9, 8));
console.log(Math.PI);

// Nan = It means Not a number
var a = 5;
var b = "apple";
console.log(a * b);
//  The output will be shown Nan, because we cannot multiply a number with a string
var a = "apple";
var b = 5;
if (isNaN(a)) {
  console.log("Put a number idiot");
} else {
  console.log("The result is " + a * b);
}
