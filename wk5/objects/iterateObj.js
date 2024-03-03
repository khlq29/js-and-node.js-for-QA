"use strict";

/**
 * Iterate objects properties
 * 
 * @methods
 * 1.keys()
 * 
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

//Iterate/loop through all properties of an object

for(let key in reportData){
    //console.log(reportData[key]);
    console.log(`The key : ${key}, and the val : ${reportData[key]}`);
}

//use of JSON.strigify method
//[object ,object]

for(let key in reportData){
    //console.log(reportData[key]);
    console.log(`The key : ${key}, and the val : ${JSON.stringify(reportData[key])}`);
}


