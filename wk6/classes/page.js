"use strict";

/**
 * Create a page class with re-usable methods
 */

class Page{

 runDate

    constructor(){
        console.log(`Calling the parent constructor...`);
        this.runDate = ''

    }

    //re-usable method
    navigateTo(Url){
        console.log(`>>>> navigating to : ${Url}`);
    }

    click(ele){
        console.log(`>>>Clicking on the element ${ele}`);
    }
}

// let page = new Page
// page.click("search")
// page.navigateTo("https//www.google.com")

module.exports = Page
