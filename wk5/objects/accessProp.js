"use strict";

/**
 * access properties
 * 
 * 
 * @scenario
 * 1.Dot operator
 * 2.key as a string
 * 3.in-built methods: keys() and vals
 * 4.Access child members (inner object and array)
 */

let testRunner = "local"
let machineID = ""
let envFile = "test_config"


let reportData = {
    testID : 12345,
    status: "PASS",
    "PASS/FAIL Flag" : "PASS",
    totalTest: 100,
    totalPass:80,
    isInScope : true,
    passrate (){
        return (this.totalPass/this.totalTest)*100 + " %"
    },

    runDt: new Date(),
    runner : testRunner,
    macID: machineID?machineID:"Unknown",
    [envFile] :{
        env:"test",
        url:"https://test.com"
    },

    scope:["smoke" , "reg" , "e2e"],
    previousRun:{
        status : "FAIL",
        runID: 6789
    }

};

//access properties

console.log(reportData["isInScope"]);

let keys = Object.keys(reportData)
console.log(keys);

let vals = Object.values(reportData)
console.log(vals);

console.log(reportData.scope[1]);
console.log(reportData.previousRun.status);
console.log(reportData["previousRun"]["status"]);