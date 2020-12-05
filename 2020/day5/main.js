const fs = require('fs');

function getInput() {
    const input = fs.readFileSync('input.txt', "utf8").split("\n");
    input.pop();
    return input;
}

function getSeatId(boardingPass) {
    row = boardingPass.slice(0,7);
    col = boardingPass.slice(7,10);
    rowNr = 0;
    colNr = 0;
    for (i in row) {
        rowNr *= 2;
        if (row[i] == 'B')
            rowNr ++;
    }
    for (i in col) {
        colNr *= 2;
        if (col[i] == 'R')
            colNr ++;
    }
    return 8*rowNr + colNr;
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