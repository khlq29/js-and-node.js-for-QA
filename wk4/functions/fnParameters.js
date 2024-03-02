"use strict";

/**
 * function parameter
 * 
 * @scenario
 * 1.default param
 * 2.passing undefined/any falsy values if not known
 * 3.passing primitive, object types as arg
 * 
 */

// 1.default param

function greet(name, greeting = "Hello"){
    console.log(`${greeting}, ${name} ?`);
}

greet("afreen","hi")

//2.passing undefined/any falsy values if not known

function fullName(fname, mname, lname){
    
    if(mname){
        console.log(`the full name is : ${fname} ${mname} ${lname}`);
    }else{
        console.log(`the full name is : ${fname} ${lname}`);
    }
}
fullName("Ban", "ki" ,"Moon")
fullName("Ban", undefined ,"Moon")
fullName("Chi","","Moon")


//3.passing primitive, object types as arg

function printFullName(personObj){
    console.log(`${personObj.firstname} ${personObj.lastname}`);
}

printFullName({
    firstname: "bob",
    lastname: "rob",
});


