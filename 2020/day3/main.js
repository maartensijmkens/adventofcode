const fs = require('fs');

function getInput() {
    const input = fs.readFileSync('input.txt', "utf8").split("\n");
    input.pop();
    return input;
}

function part1(input, right = 3, down = 1) {
    const h = input.length;
    const w = input[0].length;
    let y = 0;
    let x = 0;
    let trees = 0;
    while (y < h) {
        if (input[y][x] == '#')
            trees++
        y += down;
        x += right;
        x %= w;
    }
    return trees;
}

function part2(input) {
    let product = 1;
    const slopes = [[1,1],[3,1],[5,1],[7,1],[1,2]];
    for ([right, down] of slopes) {
        product *= part1(input, right, down);
    }
    return product;
}

function main() {
    const input = getInput();
    console.log(part1(input));
    console.log(part2(input));
}

main();