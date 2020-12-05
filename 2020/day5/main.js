const fs = require('fs');

function getInput() {
    const input = fs.readFileSync('input.txt', "utf8").split("\n");
    input.pop();
    return input;
}

function getSeatId(boardingPass) {
    id = 0;
    for (c of boardingPass) {
        id *= 2;
        if (c == 'B' || c == 'R')
            id++;
    }
    return id
}

function part1(input) {
    ids = input.map(getSeatId);
    return Math.max(...ids)
}

function part2(input) {
    ids = input.map(getSeatId);
    first = Math.min(...ids);
    last = Math.max(...ids);

    for (i = first; i<=last; i++) {
        if (!ids.includes(i))
            return i;
    }
}

function main() {
    const input = getInput();
    console.log(part1(input));
    console.log(part2(input));
}

main();