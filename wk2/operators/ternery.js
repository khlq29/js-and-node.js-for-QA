/**
 * ternery operator
 * @syntax
 * <expression> ? val1 : val2
 * 
 * set log level for different run environment
 * 
 */

//basic use
let runner = "cloud"

let loglevel = runner === "local" ? "info" : "error"
console.log(loglevel);

//advanced use
let log = runner === "local" ? "info" : runner === "cloud" ? "silent" : "error"
console.log(log);
