/**
 * for...in and for...of
* @purpose
* for...in -> Object
* for...of -> Array
 */


let obj = {
    a : 10,
    b : 20,
    c : 30
}
let windows = ["Google","Amazon","YouTube"]

//for ... in loop

for(let key in obj){
    console.log(key);//gets all keys
    console.log(obj[key]); // gets all values

}

//for ... of loop

for(let ele of windows){
    console.log(ele);
}