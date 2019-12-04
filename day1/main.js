const fs = require('fs');

function getValues() {
    let values = fs.readFileSync('input.txt', "utf8").split("\n");
    values.pop();
    return values.map(x => parseInt(x));
}

function calcFuel(x) {
    return Math.floor(x/3)-2;
}

function calcRecFuel(x) {
    const fuel = calcFuel(x);
    if (fuel < 0) return 0;
    return fuel + calcRecFuel(fuel); 
}

function part1() {
    const values = getValues();
    const result = values.reduce((x,y) => x + calcFuel(y), 0);
    console.log(result);
}

function part2() {
    const values = getValues();
    const result = values.reduce((x,y) => x + calcRecFuel(y), 0);
    console.log(result);
}

function main() {
    part1();
    part2();
}

main();