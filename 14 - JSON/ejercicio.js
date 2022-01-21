
const fs = require('fs');
let array = fs.readFileSync('node/array.json', {encoding: 'utf-8'})
console.table(array)
let arrayJSON = JSON.parse(array)
console.log(arrayJSON)