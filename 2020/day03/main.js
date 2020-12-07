const fs = require('fs');

function getInput() {
    const input = fs.readFileSync('input.txt', 'utf8').trim().split('\n');
    return input;
}

function part1(input, right = 3, down = 1) {
    const h = input.length;
    const w = input[0].length;
    let y = 0;
    let x = 0;
    let trees = 0;
    while (y < h) {
        if (input[y][x % w] == '#')
            trees++
        y += down;
        x += right;
    }
    return trees;
}

function part2(input) {
    const slopes = [[1,1],[3,1],[5,1],[7,1],[1,2]];
    return slopes.reduce((t, [right,down]) => t * part1(input, right, down), 1);
}

function main() {
    const input = getInput();
    console.log(part1(input));
    console.log(part2(input));
}

main();