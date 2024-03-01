/**
 * conditional statements
 */

//only if

let popup = true

if(popup = true){
    console.log(`>>>> click on the accept button`);
}

if(popup === true) console.log(`>>>> click on the accept button`);

// if (NOT)- checking for falsy value

let data ="pass"
if(!data) throw Error("No valid data provided")

//if .. else

let fileExist = "y"

if(fileExist === "y"){
    console.log("read the file");
}else{
    console.log("creating the file");
}

//if else if  - nested condition

let err="Error"

if(err === "Error"){
    console.log(`>>retry...`);
}else if(err === "AssertionError"){
    console.log(`>>Fail the test`);
}else if (err === "DataValidation"){
    console.log(`>>>Read the test data file`);
}else{
    console.log(`>>>Print the error message`);
}

//if else - inner conditions

let isSuccess = (5>10)

if(isSuccess===true){
    console.log(`>>> sTORING THE DB VALUES`);

}else{
    console.log(`No data received`);
    let errorCode = "ACCEPT"
    if(errorCode==="ACCEPT"){
        console.log(">>>Continue the execution...");
    }else{
        console.log(`Stop`);
    }
}


//if conditions in loops

for(let i =1; i<=10;i ++){
    if(i===6) break
    
    console.log(i);
}

console.log(`after the loop`);