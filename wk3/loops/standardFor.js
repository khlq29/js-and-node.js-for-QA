/**
 * standard for loop
 * 
 * -define the starting point
 * -define end/exit condition
 * -decide increment and decrement
 */

for(let i = 0 ; i<= 10 ; i++){
    console.log(i);
}

// with array
let sum = 0
let arr = ["apple",10,"banana",20,"kiwi",30,"watermelon",40]
console.log(arr.length);
for(let i=0 ; i<arr.length;i++){
    //console.log(arr[i]);
    let arrEle = arr[i]
    
    if(typeof arrEle === "number"){
        console.log(`${arr[i]} is a number`);
        sum += arrEle
    }else{
        console.log(`${arr[i]} is a string`);
    }
    console.log(sum);
}


//use break statements
//switch to specific window

let windows = ["Google","Amazon","YouTube"]

for(let i=0 ; i< windows.length ; i++){
    let window  = windows[i]
    if(window === "Amazon"){
        //write code to switch to this window
        break
    }
    console.log(window);
}