const fs = require('fs');

function getValues() {
    let values = fs.readFileSync('input.txt', "utf8").split("\n");
    values.pop();
    return values.map(decodeLine);
}

function decodeLine(line) {
    [head, password] = line.split(': ');
    [range, letter] = head.split(" ");
    [a, b] = range.split("-").map(x => parseInt(x));
    return [password, letter, a, b];
}

function count(array, el) {
    return array.reduce((total,x) => (x==el ? total+1 : total), 0)
}

function part1(values) {
    let total = 0;
    for ([password, letter, a, b] of values) {
        const c = count(password.split(''), letter);
        if (a <= c && c <= b) {
            total++;
        }
    }
    return total
}

function part2(values) {
    let total = 0;
    for ([password, letter, a, b] of values) {
        if ((password[a-1] == letter) != (password[b-1] == letter)) {
            total++;
        }
    }
    return total ; 
}

function main() {
    const values = getValues();
    console.log(part1(values));
    console.log(part2(values));
}

main();