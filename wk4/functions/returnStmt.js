"use strict";

/**
* 
* Return statement
* 
* @scenario
* 1. Return a single primitive value
* 2. Returns an expression [that evaluates to a value]
* 3. Return an object type
* 4. Return a function itself
* 5. Return statement in conditional statement
*/

function addTwoNum(num1, num2){
    return num1 + num2
 }

// calling the function
let total = addTwoNum(2,3)
console.log(total);

function addTwoNum1(num1, num2){
    return {total:num1 + num2}
 }

 let total1 = addTwoNum1(22,44)
 console.log(total1);



 function addTwoNum2(num1, num2){
    return function(){
        return num1+num2
    };
 }

 let total2 = addTwoNum2(22,4)
 console.log(total2());

 function addTwoNum3(num1, num2){
    if(!num1 || !num2){
        return 
    }
    return num1 + num2
 }

 let total3 = addTwoNum3(211,"")
 console.log(total3);