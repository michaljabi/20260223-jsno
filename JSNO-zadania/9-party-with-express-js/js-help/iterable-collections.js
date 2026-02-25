for(const letter of 'rwdeqyterywqtrywqteryt') {
    console.log(letter)
}

for(const num of [1,2,3,4]) {
    console.log(num)
}

for(const num of new Set([1,1,1,1,1,2,3])) {
    console.log(num)
}

for(const num of new Map([['x', 1], ['y', 2]])) {
    console.log(num)
}

for(const num of new Map([['x', 1], ['y', 2]]).values()) {
    console.log(num)
}

for(const num of new Map([['x', 1], ['y', 2]]).keys()) {
    console.log(num)
}

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of