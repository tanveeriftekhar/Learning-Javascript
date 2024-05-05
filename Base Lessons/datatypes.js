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
    fullName : "Iftekhar Hossain Tanveer",
    age : "27", 
    cgpa : "3.26",
    isPass: "true"
};
console.log(student);

//we have two ways to get access to a specific key in an object 
//object["key"]
//object.key 

console.log(student.fullName);
console.log(student["fullName"]);

//To change any key we have to do the same 

student["fullName"] = "Tashrin Tarannum Tanisha"
console.log(student.fullName);

//Conditional Statements

let mode = "light";

let color;
if (mode === "dark") {

color = "black";

}if (mode === "light") {

color = "white";
console. log (color);
}

//Ternery operator
