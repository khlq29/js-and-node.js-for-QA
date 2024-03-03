"use strict";

/**
 * how callback functions works?
 */

function printMsg(msg){
    console.log(`calling the callback function`);
    console.log(msg);
}

function greet(name , greeter){
    console.log(`calling the main function.....`);
    let greetMsg = `hello, ${name}` //action of asynch operation
    return greeter(greetMsg) //callback function where the processed value is attached
}


//calling


//option 1
greet("Yukinon", printMsg)

//option 2
greet("Yukinon" ,function(val){
    console.log(`the recorded value from the main function ${val}`);

})

//option 3

greet("Yukinon" , (res) => {
    console.log(`the recorded value from the main function ${res}`);
})

/**
 * understanding return statement in callback functiions
 */

//let res = printMsg("Hello")
//console.log(res);

let res = greet("Yukinon" , (res) => {
    return `the recorded value from the main function ${res}`
})
console.log(res);