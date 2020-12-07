const fs = require('fs');

function getInput() {
    const input = fs.readFileSync('input.txt', 'utf8').trim().split('\n');
    const edges = [];
    for (line of input.filter(c => !c.includes('no other bags'))) {
        [parent, children] = line.split(' bags contain ');
        children.split(', ')
            .map(c => edges.push([parent, c.match(/[a-z][a-z ]*(?= bag)/g)[0], parseInt(c)]));
    }
    return edges;
}

function part1(edges) {
    const queue = ['shiny gold'];
    const ancestors = new Set();
    while (queue.length > 0) {
        const current = queue.pop();
        ancestors.add(current);
        const parents = edges.filter(([p,c,n]) => c == current).map(([p,c,n]) => p);
        for (p of parents) {
            if (!ancestors.has(p) && !queue.includes(p))
                queue.push(p)
        }
    }
    return ancestors.size - 1;
}

function countBagsIn(bagType, edges) {
    children = edges.filter(([p,c,n]) => p == bagType);
    return children.reduce((t, [p,c,n]) => t + n + n*countBagsIn(c, edges), 0);
}

function part2(edges) {
    return countBagsIn('shiny gold', edges);
}

function main() {
    const edges = getInput();
    console.log(part1(edges));
    console.log(part2(edges));
}

main();
