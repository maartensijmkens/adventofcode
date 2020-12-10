const fs = require('fs');

function getInput() {
    const input = fs.readFileSync('input.txt', 'utf8').trim().split('\n');
    return input.map(n => parseInt(n));
}

function part1(input) {
    loop: for (let i = 25; i in input; i++) {
        const cur = input[i];
        for (let j = i - 25; j < i; j++) {
            for (let k = j + 1; k < i; k++) {
                if (input[j] + input[k] == cur)
                    continue loop;
            }            
        }
        return cur
    }
}

function part2(input, solution1) {
    let sum = 0;

    for (let s = 0; s in input; s++) {
        let i = s;
        while (sum < solution1) {
            sum += input[i];
            i++;
            if (sum == solution1) 
                return Math.min(...input.slice(s,i)) + Math.max(...input.slice(s,i));
        }
        sum = 0;
    }
    
}

function main() {
    const input = getInput();
    const solution1 = part1(input);
    console.log(solution1);
    console.log(part2(input, solution1));
}

main();
