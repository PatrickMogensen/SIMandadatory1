const fs = require('fs');
const csv = require('fast-csv');

var cars = JSON.parse(fs.readFileSync('file.json', 'utf8'))

console.log("JSON")
console.log(cars)

console.log('\n\n .csv:  ')

fs.createReadStream('file.csv')
    .pipe(csv.parse({ headers: true }))
    .on('error', error => console.error(error))
    .on('data', row => console.log(row))
    .on('end', rowCount => console.log(`Parsed ${rowCount} rows`));
