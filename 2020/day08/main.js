const fs = require('fs');

function getInput() {
    const input = fs.readFileSync('input.txt', 'utf8').trim().split('\n');
    return input.map(decodeEntry);
}

function decodeEntry(entry) {
    const [op, arg] = entry.split(' ');
    return [op, parseInt(arg)];
}

function execute(program) {
    const executed = new Set();
    let acc = 0;
    let pc = 0;

    while (!executed.has(pc) && pc < program.length) {
        executed.add(pc);
        const [op, arg] = program[pc]
        if (op == 'acc')
            acc += arg;
        if (op == 'jmp')
            pc += arg - 1;
        pc++;
    }

    return [acc, pc == program.length];
}

function part1(program) {
    return execute(program)[0];
}

function part2(program) {
    const swapOps = ['nop', 'jmp'];

    for (i in program) {
        const [op, arg] = program[i];
        
        if (!swapOps.includes(op)) 
            continue

        program[i][0] = swapOps[(swapOps.indexOf(op) + 1) % 2];
        const [acc, terminated] = execute(program);
        program[i][0] = op;
        
        if (terminated)
            return acc;
    }
}

function main() {
    const program = getInput();
    console.log(part1(program));
    console.log(part2(program));
}

main();
