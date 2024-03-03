"use strict";

/**
 * 
 * @rule
 * Every object in javascript will at least inherit from one (parent) object (which can be the object)
 * 
 */

let obj = {}

console.log(obj.constructor);
console.log(obj.toString());

/**
 * use of constructor property
 * 
 */

let arr =[]
let re = /abc/
let val = null

console.log(obj.constructor);
console.log(arr.constructor);
console.log(re.constructor);
console.log(val.constructor);