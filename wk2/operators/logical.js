/**
 * logical operator
 * &&
 * ||
 * !
 * 
 * main purpose
 * in conditional statements
 * to have a default value
 */

//and &&

let str = 'monday'
if(typeof str === "string" && str.length>1){
    console.log(`given value : ${str} is a valid string`);
}else{
    console.log(`given value : ${str} is not a valid string`);
}


//OR ||

let day='sunday'

if(day == "saturday" || day == "sunday"){

    console.log(`given day is weekend : ${day}`);

}else{
    console.log(`given day not a weekend : ${day}`);

}

/**
 * OR ||
 * @use
 * to assign default value
 */

let targetBrowser

let browser = targetBrowser || "Chrome"
console.log(browser);
targetBrowser="firfox"
browser = targetBrowser || "Chrome"
console.log(browser);


//not !

let firstname = `yukinon`
let lastname = `yukinoshita`
if(!firstname || !lastname){
    console.log(`given data ${firstname} ${lastname}is not valid`);
}else{
    console.log(`given data ${firstname} ${lastname} is valid`);
}