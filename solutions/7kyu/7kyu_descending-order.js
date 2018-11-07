function descendingOrder(n){
    const splitted = n.toString().split('');
    const sorted = splitted.sort((a, b) => b - a);
    return parseInt(sorted.join(''));
}

console.log(descendingOrder(123456789));
console.log(descendingOrder(0));

// Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
//
// Examples:
// Input: 21445 Output: 54421
//
// Input: 145263 Output: 654321
//
// Input: 1254859723 Output: 9875543221