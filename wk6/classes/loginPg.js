"use strict";
const Page = require("./page")



/** 
* A login page
* @lessons
* 1. How to inherit properties from base class?
* 2. How to call base class property or method?
* 3. How to create an object?
* @terminology
* super class -> sub-class
* base class -> derived class
* parent class -> child class
*
*/

class LoginPage extends Page{
    constructor(){
        super() //this must be the first line the child class constructor
        //todo
        console.log(`Calling the child constructor...`);
        this.runDate = '2021-02-06'
        console.log(`the rundate is ${this.runDate}`);
    }

    //Getter property--
    get loginBtn(){
        return `loginBtn from getter`
    }

    //Click a login btn
    clickLoginBtn(ele){
       // console.log(`>>>>>CLicking the login button: ${ele}`);
        this.click(this.loginBtn)
    }

}

//object creation

let loginPg = new LoginPage()
// console.log(typeof loginPg);

// //calling a parents method
// loginPg.navigateTo("google.com")

// //calling the own method
// loginPg.clickLoginBtn()




