"use strict";

/**
 * use of indexOf method
 */

let str = "Application # {12345} submitted"
let start = str.indexOf("{")
let end = str.lastIndexOf("}")
console.log(start);
console.log(end);
let number = str.slice(start+1,end)
console.log(number);