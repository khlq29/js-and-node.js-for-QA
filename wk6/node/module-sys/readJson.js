"use strict";

/**
 * Use case: 
 * Read a json file (e.g some config or constants data)
 */

//const data = require("./../../../data/sampleData copy.json")

import data from "./../../../data/sampleData copy.json" assert { type: 'json' };
console.log(JSON.stringify(data));


