"use strict";

/**
 * real time use case of a promise
 */


const fetch = require("node-fetch")

//using promise
/*
function getAPIRes(){
    fetch("https://api.github.com/users/github")
    .then((res)=>{
        return res.json();
    }).then((updatedRes)=>{
        console.log(updatedRes);
    })
    .catch(err => {
        console.log(err);
    })
}
*/
// asyn and await

async function getAPIRes(){
    let response = await fetch("https://api.github.com/users/github")
    let data = await response.json()
    console.log(data);
}

getAPIRes()