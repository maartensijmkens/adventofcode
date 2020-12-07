const fs = require('fs');

function getInput() {
    const input = fs.readFileSync('input.txt', 'utf8').trim().split('\n\n');
    return input.map(a => a.split('\n'));
}

function part1(input) {
    const answers = input.map(a => a.join('').split(''));
    return answers.map(a => new Set(a).size).reduce((t,a) => t + a)
}

function part2(input) {
    const uniques = [... new Set(input.map(a => a.join('').split('')).flat())];
    return input.map(a => uniques.reduce((t,u) => t + a.every(b => b.includes(u)), 0)).reduce((t,a) => t + a);
}

function main() {
    const input = getInput();
    console.log(part1(input));
    console.log(part2(input));
}

main();
