const fs = require('fs');

function getInput() {
    const input = fs.readFileSync('input.txt', "utf8").split("\n");
    input.pop();
    return input;
}

function getSeatId(boardingPass) {
    return parseInt(boardingPass.replace(/B|R/g, '1').replace(/F|L/g, '0'),2);
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