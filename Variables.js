console.log("Hello World");
console.log(2 + 2);
let num = 4;
console.log(num);

let username = "Sunil"
console.log(username); 

let username1 = "Sunil's Account"
console.log(username1);

console.info(username1);
console.warn(username1);
console.error(username1);

console.info("Info Welcome to JS");
console.warn("Warn Welcome to JS");
console.error("Error Welcome to JS");

//table

let student = {
    name : 'Sunil',
    age : 22,
    course : 'CSC'
};

console.table(student);



/* 
let is keyword to declare a variable
a is variable name
= is assignment operator
; is end of the statement
*/
let a = 10;
let b = 20;

let sum = a + b;
console.log('Sum of two variables are:', sum);
console.log('Sum of two variables are:' + sum);

console.log('Sum of ' +a + ' , ' + b + ' is:' + sum);

//ES6 --> Template string/ template literal (``) back tick

console.log(`The Sum of ${a} , ${b} is:`, sum);

