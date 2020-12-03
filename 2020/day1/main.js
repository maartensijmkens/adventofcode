const fs = require('fs');

function getValues() {
    let values = fs.readFileSync('input.txt', "utf8").split("\n");
    values.pop();
    return values.map(x => parseInt(x));
}

function part1(values) {
    for (v1 of values) {
        for (v2 of values) {
            if (v1 + v2 == 2020) {
                return v1*v2;
            }
        }
    }
}

function part2(values) {
    for (v1 of values) {
        for (v2 of values) {
            for (v3 of values) {
                if (v1 + v2 + v3 == 2020) {
                    return v1*v2*v3;
                }
            }
        }
    }
}

function main() {
    const values = getValues();
    console.log(part1(values));
    console.log(part2(values));
}

main();