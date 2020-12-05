const fs = require('fs');

function getInput() {
    const input = fs.readFileSync('input.txt', "utf8").split("\n");
    input.pop();
    return input.map(decodeEntry);
}

function decodeEntry(entry) {
    [head, password] = entry.split(': ');
    [range, letter] = head.split(" ");
    [a, b] = range.split("-").map(x => parseInt(x));
    return [password, letter, a, b];
}

function count(array, el) {
    return array.reduce((total,x) => (x==el ? total+1 : total), 0)
}

function part1(input) {
    let total = 0;
    for ([password, letter, a, b] of input) {
        const c = count(password.split(''), letter);
        if (a <= c && c <= b) {
            total++;
        }
    }
    return total
}

function part2(input) {
    let total = 0;
    for ([password, letter, a, b] of input) {
        if ((password[a-1] == letter) != (password[b-1] == letter)) {
            total++;
        }
    }
    return total ; 
}

function main() {
    const input = getInput();
    console.log(part1(input));
    console.log(part2(input));
}

main();