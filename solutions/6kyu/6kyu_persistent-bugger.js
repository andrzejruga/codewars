function persistence(num) {
    let iterations = 0;
    let arr = Array.from(num.toString());
    let multi;
    while (arr.length > 1) {
        multi = arr.reduce( (a, b) => a * b );
        iterations++;
        arr = Array.from(multi.toString());
    }
    return iterations;
}

console.log(persistence(39));
console.log(persistence(999));
console.log(persistence(4));
