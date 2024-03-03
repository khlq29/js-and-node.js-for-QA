"use strict";

/**
 * Arrow functions
 * 
 * @scenario
 * 1. convert a normal function to arrow function
 * 2. no param
 * 3. single param
 * 4. more than one param (single and more than one statements)
 * 5. forEach() method example
 * 
 */


// 1. convert a normal function to arrow function
let sum = (num1, num2) => {
    let sum = num1 + num2
     return sum
  };

let total = sum(2,3)
console.log(total);
  
//2. no param
let arrowFn = ()=> 10 > 5
console.log(arrowFn());

//3. single param

let greet = (name) => console.log(`hello, ${name}`);
greet("yukinon")


//4. more than one param (single and more than one statements)
let sum1 = (num1, num2) => num1 + num2

let total1 = sum1(2,10)
console.log(total1);

//5. forEach() method example
let windows = ["Google","Amazon","YouTube"]

//() => {}

windows.forEach((val , index , arr)=>{
    console.log(val);
    console.log(index);
    console.log(arr);
});

