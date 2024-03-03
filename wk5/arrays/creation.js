"use strict";
/**
*Array creation - different options
* @options
* 1. Literals (most commonly used)
* 2. Constructor function
* 3. Object creation using new keyword
*/

//1. Literals (most commonly used)

let arr = ["apple","orange","banana","Watermelon"]

//2.constructor function

let arr1 = Array("apple","orange","banana","Watermelon")

//3. Object creation using new keyword

let arr2 =new Array("apple","orange","banana","Watermelon")


//check
console.log(arr);
console.log(arr1);
console.log(arr2);

console.log(`Single ele: ${arr[1]}`);
console.log(typeof arr);
console.log(arr.constructor);