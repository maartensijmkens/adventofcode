const fs = require('fs');

function getValues() {
    let values = fs.readFileSync('input.txt', "utf8").split("\n");
    return values;
}

function part1(values, right = 3, down = 1) {
    const h = values.length;
    const w = values[0].length;
    let y = 0;
    let x = 0;
    let trees = 0;
    while (y < h) {
        if (values[y][x] == '#')
            trees++
        y += down;
        x += right;
        x %= w;
    }
    return trees;
}

function part2(values) {
    let product = 1;
    const slopes = [[1,1],[3,1],[5,1],[7,1],[1,2]];
    for ([right, down] of slopes) {
        product *= part1(values, right, down);
    }
    return product;
}

function main() {
    const values = getValues();
    console.log(part1(values));
    console.log(part2(values));
}

main();