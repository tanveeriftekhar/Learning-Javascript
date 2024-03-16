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