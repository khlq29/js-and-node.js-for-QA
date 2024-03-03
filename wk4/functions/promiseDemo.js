"use strict";
/**
4
* Promise
* @scenario
* 1. Initialise a promise object
* 2. Pending, fulfilled and rejected status
* 3. How to get a resolved and rejected value? - then()...catch()
* 4. UnhandledPromiseRejection error
* 5. Promise chaining
*/

let proObj = new Promise((resolve, reject)=>{
    console.log(`executing the promise ...`);
    
    setTimeout(() => {

        let task = false
        if(task){
            resolve("promise is resolved...") //asynch action that returns some value after 2secs
        }else{
            reject("promise failed...")
        }
        //resolve("promise is resolved...") //asynch action that returns some value after 2secs
    }, 2000);
       
})

//consuming the promise
/** 
proObj.then((res)=>{
    console.log(res);
    return `${res}  update with more value`;

})
.then((updatedVal)=>{
    console.log(updatedVal);
})
.catch((res)=>{
    console.log(res);
});
*/
//using asynch and await

async function getdata(){
    try {
        let res = await proObj
   console.log(res);
    } catch (error) {
        console.log(error);
    } 
}
getdata()
