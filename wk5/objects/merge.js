"use strict";
/**
 * Merging objects
 * @usecase
 * Merging two config objects
 * @approach
 * 1. Using Object.assign()
 * 2. Using the spread operator
 */

let obj1 = {
  a: 1,
  b: 2,
  c: 3,
};

let obj2 = {
  c: 4,
  d: 5,
  e: 6,
};

// Merging objects


//approach 1

Object.assign(obj1,obj2)
console.log(obj1);

//approach 2
let obj = {
    ...obj1,
    ...obj2
}
console.log(obj);