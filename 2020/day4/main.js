const fs = require('fs');
const { PassThrough } = require('stream');

function getValues() {
    let values = fs.readFileSync('input.txt', "utf8").split("\n\n");
    return values.map(decodeLine);
}

function decodeLine(line) {
    const data = {}
    pairs = line.split(/ |\n/);
    for (p of pairs) {
        [field, value] = p.split(":");
        data[field] = value
    }
    return data;
}

function part1(values) {
    let total = 0;
    const required = ['byr','iyr','eyr','hgt','hcl','ecl','pid'];
    for (v of values) {
        let valid = true;
        for (r of required) {
            if (!v[r]) valid = false;
        }
        if (valid) total++;
    }
    return total;
}

function part2(values) {
    let total = 0;
    const required = ['byr','iyr','eyr','hgt','hcl','ecl','pid'];
    const tests = [
        (vr) => vr.length == 4 && !isNaN(vr) && parseInt(vr) >= 1920 && parseInt(vr) <= 2002,
        (vr) => vr.length == 4 && !isNaN(vr) && parseInt(vr) >= 2010 && parseInt(vr) <= 2020,
        (vr) => vr.length == 4 && !isNaN(vr) && parseInt(vr) >= 2020 && parseInt(vr) <= 2030,
        (vr) => {
            cm = parseInt(vr.replace('cm', ''));
            inch = parseInt(vr.replace('in', ''));
            return vr.includes('cm') && cm >= 150 && cm <= 193 || 
            vr.includes('in') && inch >= 59 && inch <= 76;
        },
        (vr) => new RegExp(/^#([a-fA-F0-9]{6})$/).test(vr),
        (vr) => {
            colors = ['amb','blu','brn','gry','grn','hzl','oth'];
            return colors.includes(vr);
        },
        (vr) => vr.length == 9 && !isNaN(vr)
    ];
    for (v of values) {
        let valid = true;
        for (i in required) {
            r = required[i];
            t = tests[i];
            if(!v[r] || !t(v[r])) {
                valid = false;
                break;
            }
        }
        if (valid) total++;
    }
    return total;
}

function main() {
    const values = getValues();
    console.log(part1(values));
    console.log(part2(values));
}

main();