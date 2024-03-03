"use strict";

/**
 * merge array using spread operator
 */

let arr1 = ['apple','banana','srwaberry']
let arr2 = ['chocolate','ice cream','cake']

let arr = [...arr1, ...arr2]
console.log(arr);
console.log(arr.length);