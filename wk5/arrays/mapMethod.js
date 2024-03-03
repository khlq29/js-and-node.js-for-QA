"use strict";

/**
* @usecase
*Use of map method
* Imagine a case where all numbers are represented in an strings - how to convert them all to number
*
* @approach
* 1. loop
* 2. map (easy)
*
* @returns
* modified array
*/


let givenArr = ["123", "25", "566", "122"];
console.log(givenArr);
//let modArr = givenArr.map(ele => parseInt(ele))
//or
let modArr = givenArr.map(ele => +(ele))
console.log(modArr);