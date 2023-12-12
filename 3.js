const fs = require('node:fs');
let data = new fs.readFileSync('3.txt').toString().split(/\n/);
let tw = [];
for (const line of data) {
    tw.push(line.match(/./g));
}
let sum = 0;

function isCounts(number, arr) {

    return false;
}

for (const line of data) {
    const numbers = line.match(/\d+/g);
    for (const number in numbers) {
        if (isCounts(number)) {
            sum += number;
        }
    }
}
console.log(sum)
