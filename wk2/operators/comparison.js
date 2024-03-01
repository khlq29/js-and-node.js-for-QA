/**
 * comparison operator
 * == (checks only the value)
 * === (strick equality operator:  value + types) 
 * != 
 * !==
 * >
 * <
 * <=
 * <=
 
@returns boolean

@rule:
in most cases if the two operands are not of the same type
js attempts to convert them to a appropriate type for thr comparison.
this behavior generally results in comparing the operands numerically
*/

//=== , !==
let a= '1'
let b=1
console.log(a == b);//true
console.log(a === b);//false

//not equal
console.log(1!==4);//false