"use strict";
/**
* length property rules
* @rules
* 1. length property returns total index + 1. This does not mean there are that many elements in that object 
* 2. length property can be set manually
*/

//rule 1

let arr = []
arr[4] = 'kiwi'
console.log(arr);
console.log(`total elements : ${arr.length}`);

let count = 0
for(let i=0;i<arr.length;i++){
    if(arr[i]) count++
}
console.log(count);

//rule 2

let arr1 = []
arr1.length = 10
console.log(arr1.length);