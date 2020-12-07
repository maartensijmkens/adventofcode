const fs = require('fs');

function getInput() {
    const input = fs.readFileSync('input.txt', 'utf8').trim().split('\n');
    return input;
}

function getSeatId(boardingPass) {
    const bin = boardingPass.replace(/B|R|F|L/g, m => /B|R/.test(m) ? 1 : 0);
    return parseInt(bin, 2);
}

function part1(input) {
    const ids = input.map(getSeatId);
    return Math.max(...ids)
}

function part2(input) {
    const ids = input.map(getSeatId);
    const first = Math.min(...ids);
    const last = Math.max(...ids);

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