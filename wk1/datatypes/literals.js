/*
a. string (e.g. "Hello")
b. number (e.g. 5, 10.5, 20)
c. boolean (true/false)
d. undefined
e. null
f. bigint
g. symbol (data type whose instances are unique and immutable)
h. Object type (Object, Array, Date..etc)
*/ 

//string
let str="hello"
let str1='hello'
let str3 = `${str}, world!`
console.log(str3);


//number
let num=5
let num1=5.5


//boolean
let bool = true
let bool1 = false


//object
let obj = {}


//Array
let arr = []


//regexp
let re = /abc/


//undefined, null
let val1
let val2 = null

/*
a. typeof <any_valid_JS type>
b. typeof(any_valid_JS type)
 */

console.log(`the type of str is: ${typeof str}`);
console.log(`the type of number is: ${typeof (num)}`);
console.log(`the type of number is: ${typeof (num1)}`);
console.log(`the type of bool is: ${typeof (bool)}`);
console.log(`the type of obj is: ${typeof (obj)}`);
console.log(`the type of array is: ${typeof (arr)}`);
console.log(`the type of regexp is: ${typeof (re)}`);
console.log(`the type of null is: ${typeof (val2)}`);