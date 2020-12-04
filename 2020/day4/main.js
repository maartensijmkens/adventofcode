const fs = require('fs');

function getValues() {
    let values = fs.readFileSync('input.txt', "utf8").split("\n\n");
    return values.map(decodeLine);
}

function decodeLine(line) {
    pairs = line.split(/ |\n/).map(p => p.split(':'));
    return Object.fromEntries(pairs);
}

function part1(values) {
    const required = ['byr','iyr','eyr','hgt','hcl','ecl','pid'];
    return values.filter(password => required.every(r => password.hasOwnProperty(r))).length
}

function testQuantity(string, l, lb = -Infinity, ub = Infinity, unit = '') {
    n = parseInt(string);
    return (!l || string.length == l) && string.endsWith(unit) && n >= lb && n <= ub;
}

function part2(values) {
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
    return values.filter(password => required.every((r,i) => password[r] && tests[i](password[r]))).length
}

function main() {
    const values = getValues();
    console.log(part1(values));
    console.log(part2(values));
}

main();