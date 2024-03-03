"use strict";

/**
 * setting up values through assignment operator
 * 1.top level property
 * 2.inner property
 * 3.assignment to other object
 */

let reportData ={
    status :"PASS",
    scope :["smoke","reg","e2e","sanity"],
    previousRun: {
        status : "FAIL",
        runId : 12345678
    },
}

//Assignment
reportData.status ="FAIL"
reportData.previousRun.status = "PASS"
reportData["previousRun"]["status"] = "PASS"

console.log(reportData);

let obj ={}

obj = reportData
console.log(reportData);

let str = "Hello"
console.log(str.toUpperCase());
console.log(str);
