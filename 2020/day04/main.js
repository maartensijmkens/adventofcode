const fs = require('fs');

function getInput() {
    const input = fs.readFileSync('input.txt', 'utf8').trim().split('\n\n');
    return input.map(decodeEntry);
}

function decodeEntry(entry) {
    pairs = entry.split(/ |\n/).map(p => p.split(':'));
    return Object.fromEntries(pairs);
}

function part1(input) {
    const required = ['byr','iyr','eyr','hgt','hcl','ecl','pid'];
    return input.filter(passport => required.every(r => passport.hasOwnProperty(r))).length
}

function testQuantity(string, l, lb = -Infinity, ub = Infinity, unit = '') {
    n = parseInt(string);
    return (!l || string.length == l) && string.endsWith(unit) && n >= lb && n <= ub;
}

function part2(input) {
    const required = ['byr','iyr','eyr','hgt','hcl','ecl','pid'];
    const tests = [
        (vr) => testQuantity(vr, 4, 1920, 2002),
        (vr) => testQuantity(vr, 4, 2010, 2020),
        (vr) => testQuantity(vr, 4, 2020, 2030),
        (vr) => testQuantity(vr, null, 150, 193, 'cm') || testQuantity(vr, null, 59, 76, 'in'),
        (vr) => new RegExp(/^#([a-fA-F0-9]{6})$/).test(vr),
        (vr) => ['amb','blu','brn','gry','grn','hzl','oth'].includes(vr),
        (vr) => testQuantity(vr, 9) && !isNaN(vr)
    ];
    return input.filter(passport => required.every((r,i) => passport.hasOwnProperty(r) && tests[i](passport[r]))).length
}

function main() {
    const input = getInput();
    console.log(part1(input));
    console.log(part2(input));
}

main();