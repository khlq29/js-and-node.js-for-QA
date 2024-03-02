"use strict";

/**
 * @rules
* Extract substring use of slice method
* 1. slice method requires start (inclusive) and end index (end index is not included)
* 2. You can specify only the start index
* 3. You can specific the negative range
*/


/**
* Scenario
* 1. Extract only yy-mm-dd format
* 2. Extract year (4 digits)
* 3. Extract month
* 4. Extract date
*/


let dt = "2022-02-26"

let yymmdd = dt.slice(2)
console.log(yymmdd);


let year = dt.slice(0,4)
console.log(year);

let month = dt.slice(5,7)
console.log(month);

//let date = dt.slice(8,10)
//let date = dt.slice(8)
let date = dt.slice(-2)
console.log(date);