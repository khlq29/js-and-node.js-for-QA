/**
 * While loop
*@when to use?
- Until a condition is met (or when the end condition is not known)
- e.g. Retry until you get a response
Wating for an API response, retry max of 10 times
 */

//syntax
let count = 1;
while(true){
    console.log(count);
    if(count == 100) break
    count++;
}

let count1 = 1;
let isDataReturned = false
while(isDataReturned === false){
    console.log(count);
    
    if(count1 == 5) {
        // WE GOT AN API RESPONSE
        isDataReturned = true
    }
    count++;
}