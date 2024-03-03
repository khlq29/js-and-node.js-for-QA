"use strict";
/**
* Different data structure
* @scenario
* 1. Same type of data
* 2. Different type of data
* 3. Array containing an object
* 4. Array containing an array
*/

// 1. Same type of data

// let arr = ["apple", "orange", "banana"];

// 2. Different type of data

// let arr = [1, "orange", true];

// 3. Array containing an object

// let arr = [{
//     name :"Yukinon",
//     age: 17
// },{
//    name :"Navia",
//    age : 18 
// },{
//     name :"Asuna",
//     age: 17
// }]


//4. Array containing an array
let arr = [[
    1,2,3
],[
    4,5,6],[
        7,8,9
    ]]
//check
console.log(arr);
console.log(arr.length);