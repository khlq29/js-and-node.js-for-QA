"use strict";

/**
 * Compare string
1. Full match
2. Partial match
- includes()
- startsWith()
- endsWith()
* @questions:
1. Is this a case sensitive comparison?
2. Does the string needs to be trimmed?
*/

let filename = "invoice_123.pdf"

// full match
if(filename.toUpperCase().trim() === "INVOICE_123.PDF"){
    console.log(">>>The file name matches...");
}

//partial comparison

if(filename.startsWith("invoice")){
    console.log(`yes it matches`);
}

if(filename.endsWith(".pdf")){
    console.log(`format macthes`);
}
