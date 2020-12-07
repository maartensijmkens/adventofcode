const fs = require('fs');

function getInput() {
    const input = fs.readFileSync('input.txt', 'utf8').trim().split('\n');
    return input.map(decodeEntry);
}

function decodeEntry(entry) {
    // decode line
}

function part1(input) {
    // calculate first answer
}

function part2(input) {
    // calculate second answer
}

function main() {
    const input = getInput();
    console.log(part1(input));
    console.log(part2(input));
}

main();
