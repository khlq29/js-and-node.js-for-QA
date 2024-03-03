"use strict";

/**
* Objects creation Different ways
*
* @scenario
3. Object create method
* 1. Using object literals/initializer (Commonly used in Test Automation)
* 2. Using constructor fn
* From ES5, Object can be created using classess
*/

// 1. Using object literals/initializer (Commonly used in Test Automation)

let obj = {
    name : "Yukinon",
    age : 17,
    isMarried : false
}

//using constructor function
// function person(name, age ,isMarried){
//     this.name = name
//     this.age = age
//     this.isMarried =isMarried

//     return `The name is : ${this.name} and his/her age is ${this.age} and marital status --> ${this.isMarried}`
// }

// let obj = new person("Yukinon",17,false)


//Object create method
let obj1 = Object.create(obj)
console.log(Object.getPrototypeOf(obj1));



//Result

console.log(obj1);
console.log(obj1.age);
console.log(obj1.name);
console.log(typeof obj1);
console.log(typeof obj1.name);