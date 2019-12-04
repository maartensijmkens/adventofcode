const fs = require('fs');

function getProgram() {
    let program = fs.readFileSync('input.txt', "utf8").split(",");
    return program.map(x => parseInt(x));
}

function run(program, noun, verb) {
    let exit = false;
    let pc = 0;
    program[1] = noun;
    program[2] = verb;
    while(!exit) {
        const opcode = program[pc];
        if (opcode == 1 || opcode == 2) {
            const arg1 = program[program[pc+1]];
            const arg2 = program[program[pc+2]];
            const res = program[pc+3];
            if (opcode == 1) program[res] = arg1 + arg2;
            if (opcode == 2) program[res] = arg1 * arg2;
            pc += 4;
        }
        if (opcode == 99) exit = true;
    }
    return program[0];
}

function part1() {
    let program = getProgram();
    const result = run(program, 12, 2);
    console.log(result);
}

function part2() {
    for (i = 0; i < 100; i++) {
        for (j = 0; j < 100; j++) {
            let program = getProgram();
            if (run(program, i, j) == 19690720) console.log(100*i+j);
        }
    }
}

function main() {
    part1();
    part2();
}

main();