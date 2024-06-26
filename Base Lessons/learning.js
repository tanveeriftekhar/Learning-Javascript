/*Javascript has two data types 
Primitive data types
Non-primitive data types 

Primitive data types are 
Number 
String 
Boolean 
Undefined 
Null 
BigInt 
Symbol 


Non-primitive data types are called Objects 
Objects are made of "key:value" pairs 
Objects have some sub-categories which are called arrays, functions etc 

*/

const student = {
  fullName: "Iftekhar Hossain Tanveer",
  age: "27",
  cgpa: "3.26",
  isPass: "true",
};
console.log(student);

//we have two ways to get access to a specific key in an object
//object["key"]
//object.key

console.log(student.fullName);
console.log(student["fullName"]);

//To change any key we have to do the same

student["fullName"] = "Tashrin Tarannum Tanisha";
console.log(student.fullName);

//Conditional Statements

let mode = "light";

let color;
if (mode === "dark") {
  color = "black";
}
if (mode === "light") {
  color = "white";
  console.log(color);
}

//Ternery operator
//condition? true output : false output
let age = 18;
let result = age >= 18 ? "adult" : "not adult";
console.log(result);

//Also we can print result in the condition
let age1 = 18;
age1 >= 18 ? console.log("adult") : console.log("not adult");

//Testing

let num = prompt("enter a number:");
if (num & (5 === 0)) {
  console.log(num, "is a multiple of 5");
  if (num & (5 === 0)) {
  } else console.log(num, " is NOT a multiple of 5");
}

//Loops
//for loop
for (let i = 1; i <= 5; i++) {
  console.log("i = ", i);
}

//while loops
let i = 10;
while (i <= 100) {
  console.log("I Love You");
  i++;
}

//do-while loop
let j = 20;
do {
  console.log("I am a coder");
  j++;
} while (j <= 100);
