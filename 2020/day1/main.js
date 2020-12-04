const fs = require('fs');

function getInput() {
    const input = fs.readFileSync('input.txt', "utf8").split("\n");
    input.pop();
    return input.map(x => parseInt(x));
}

function part1(input) {
    for (v1 of input) {
        for (v2 of input) {
            if (v1 + v2 == 2020) {
                return v1*v2;
            }
        }
    }
}

function part2(input) {
    for (v1 of input) {
        for (v2 of input) {
            for (v3 of input) {
                if (v1 + v2 + v3 == 2020) {
                    return v1*v2*v3;
                }
            }
        }
    }
}

function main() {
    const input = getInput();
    console.log(part1(input));
    console.log(part2(input));
}

main();