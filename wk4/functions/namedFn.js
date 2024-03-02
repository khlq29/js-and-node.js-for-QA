"use strict";
/**
 * Named function
* @definition
* Function that has a name/identifier

* @scenario
* 1. function that returns a value
* 2. function that does an action
* 3. Calling function
* 4. Any type of data can be provided and no type checking is done
* 5.More or less args can be provided and -
  no check is performed on # number of parameter(s) Vs Number of args received
* 6. Function name and typeof Operator
*/

//1. function that returns a value
function addTwoNum(num1, num2){
  let sum = num1 + num2
   return sum
}

//2. function that does an action

function click(ele){
    console.log(`click on element`);
    //ele.click()
}

//3. Calling function

let total = addTwoNum(5,5)
console.log(total);
click("loginBtn")

//4. Any type of data can be provided and no type checking is done
let total1 = addTwoNum("five","five")
console.log(total1);

//More or less args can be provided and -
//no check is performed on # number of parameter(s) Vs Number of args received

let total2 = addTwoNum()
console.log(total2);

let total4 = addTwoNum(1)
console.log(total4);

//6. Function name and typeof Operator

console.log(typeof addTwoNum);