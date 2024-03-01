/*
Variable Rules
1. Variable name should start with a letter, or underscore (_), or dollar sign ($)
2. System reserved keywords can't be used e.g. if, else, throw, break
3. Variable names are case-sensitive
4. Can't have same name for other types (e.g. function name, object name)
5. Multiple variables can be declared in single line (separated by comma)
6. When you just declare a variable, the data type will be undefined
*/ 


console.log("hello world");

let greeting = "hello", greeting1 ="good, Morning"
console.log(greeting, greeting1);

//let
let val=0
val=10
console.log(val);

//const
const APP_URL = "https://abc.com"
console.log(APP_URL);


let count = 0

if(true){
    let count = 10
    console.log("the value of count: ",count);
}

console.log(count);