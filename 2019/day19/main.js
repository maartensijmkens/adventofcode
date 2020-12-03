const fs = require('fs');

function getMap() {
    return fs.readFileSync('input.txt', "utf8").split("\n");
}


function isKey(symbol) {
    return symbol != "." && symbol != "#" && symbol.toLowerCase() == symbol;
}

function isDoor(symbol) {
    return symbol != "." && symbol != "#" && symbol.toUpperCase() == symbol;
}

function isFree(symbol) {
    return isKey(symbol) || symbol == ".";
}


function canGoUp(map,x,y) {
    return isFree(map[y-1][x]);
}

function canGoDown(map,x,y) {
    return isFree(map[y+1][x]);
}

function canGoLeft(map,x,y) {
    return isFree(map[y][x-1]);
}

function canGoRight(map,x,y) {
    return isFree(map[y][x+1]);
}




function getReachableKeys(map,x,y,keys=[],visited=[],steps=0) {
    const symbol = map[y][x];
    visited.push({x:x,y:y});

    if(isKey(symbol))
        return {}

    if(canGoUp(map,x,y))
        getReachableKeys(map,x,y,keys=[],visited=[],steps=0)
}


function part1() {
    let map = getMap();
    console.log(map[40][40]);
}

function part2() {
}

function main() {
    part1();
    part2();
}

function test() {
}

main();