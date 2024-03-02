"use strict";

/**
 *  Formatting string using template literals:
 * Examples:
 * ABC Bank Statements from 2022-01-01 to 2022-02-01 for account ending 12345
 */

//exmaple
let stDt = "2022-01-01"
let endDt = "2022-02-01"
let acNum = "8910"


let emailSub =`ABC Bank Statements from ${stDt} to ${endDt} for account ending ${acNum}`
console.log(emailSub);