/**
a. parseInt()
b. parseFloat()
c. unary plus operator 
d. toString() method 
*/

let val1 = "5"
let val2 = "5.5"

console.log(`the types of val1 : ${typeof val1}`);
console.log(`the types of val2 : ${typeof val2}`);

//convert a string to number
numVal1 = parseInt(val1)
numVal2 = parseFloat(val2)

//unary plus
numVal1 = +(val1)
numVal2 = +(val2)

console.log(`the types of numval1 : ${typeof numVal1}, and the number is ${numVal1}`);
console.log(`the types of numval2 : ${typeof numVal2}, and the number is ${numVal2}`);

//convert to a string type
let strVal1 = numVal1.toString()
console.log(`the types of strval2 : ${typeof strVal1}, and the number is ${strVal1}`);