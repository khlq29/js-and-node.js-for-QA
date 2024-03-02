"use strict";
/**
 * Replace and replace all
* @rules:
* 1.replace method can accept a string/regexp as its first arg
* @retuns
* The modified string value
*/

/**
* Scenario:
* 1. Get only the filename
* 2. Rename the file extention from .pdf-> .txt
* 3. Replace table_name with Accounts
* 4. Convert the given date format to YYYYMMDD format
 */

let filename = "invoice_123.pdf"
let query_template = "SELECT * FROM {{table_name}}"
let dt = "2022-01-01"


//1. Get only the filename

let onlyfilename = filename.replace(".pdf","")
console.log(onlyfilename);

//2. Rename the file extention from .pdf-> .txt

let rename = filename.replace("pdf","txt")
console.log(rename);

//3. Replace table_name with Accounts

let replace = query_template.replace("{{table_name}}","Account")
console.log(replace);

//4. Convert the given date format to YYYYMMDD format

let reform = dt.replace(/-/g,"")
console.log(reform);

