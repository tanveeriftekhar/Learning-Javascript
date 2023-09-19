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
// document.write(myVar);
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

var myAge ="50";
if (myAge < 10 || myAge > 30 || myAge === 50) {
  document.write("You are a not allowed");
} else {
  document.write("You are allowed");
}

// While loop 
var age = 5; 
while (age < 10){
  console.log("Your age is less than 10");
  age++;
}
document.write ("You are now more than 10");