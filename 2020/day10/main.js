const fs = require('fs');

function getInput() {
    let input = fs.readFileSync('input.txt', 'utf8').trim().split('\n');
    input = input.map(n => parseInt(n));
    input.push(0);
    input.push(Math.max(...input) + 3);
    input.sort((a, b) => a - b);
    return input
}

function part1(input) {   
    const counts = [0, 0, 0];

    for (let i = 1; i < input.length; i++) {
        const diff = input[i] - input[i-1];
        counts[diff - 1]++;
    }
    return counts[0] * counts[2];
}

function part2(input) {
    let count = 1;
    let s = 0;

    for (let n = 1; n < input.length; n++) {
        if (input[n] - input[n-1] == 3) {
            m = n - s - 2;
            count *= (1 + m * (m + 1) / 2);
            s = n;
        }
    }
    return count;
}

function main() {
    const input = getInput();
    console.log(part1(input));
    console.log(part2(input));
}

main();
