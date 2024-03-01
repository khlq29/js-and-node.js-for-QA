/**
a. false
b. undefined
c. null
d. 0
e. NaN
f. ""(empty string)
 */

let val=[]

if(val){
console.log('condition met ...');
}else{
console.log(`Given ${val} is a falsy value `);
}

let val2 = 5 + undefined
console.log(val2);

let val3 = 5+null
console.log(val3);

