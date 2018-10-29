// It works, but I'm not fully satisfied with this solution.
// There are a few much better solutions...

function zeros(n) {
    const zeros5pow1 = Math.floor(n/Math.pow(5, 1));
    const zeros5pow2 = Math.floor(n/Math.pow(5, 2));
    const zeros5pow3 = Math.floor(n/Math.pow(5, 3));
    const zeros5pow4 = Math.floor(n/Math.pow(5, 4));
    const zeros5pow5 = Math.floor(n/Math.pow(5, 5));
    const zeros5pow6 = Math.floor(n/Math.pow(5, 6));
    const zeros5pow7 = Math.floor(n/Math.pow(5, 7));
    const zeros5pow8 = Math.floor(n/Math.pow(5, 8));
    const zeros5pow9 = Math.floor(n/Math.pow(5, 9));
    const zeros5pow10 = Math.floor(n/Math.pow(5, 10));
    const zeros5pow11 = Math.floor(n/Math.pow(5, 11));
    const zeros5pow12 = Math.floor(n/Math.pow(5, 12));
    const zeros5pow13 = Math.floor(n/Math.pow(5, 13));
    const zeros5pow14 = Math.floor(n/Math.pow(5, 14));
    const zeros5pow15 = Math.floor(n/Math.pow(5, 15));
    return zeros5pow1 + zeros5pow2 + zeros5pow3 + zeros5pow4 + zeros5pow5 + zeros5pow6 + zeros5pow7 + zeros5pow8 + zeros5pow9 + zeros5pow10 + zeros5pow11 + zeros5pow12 + zeros5pow13 + zeros5pow14 + zeros5pow15;
}

console.log(zeros(0));
console.log(zeros(6));
console.log(zeros(30));
console.log(zeros(100000));


// Write a program that will calculate the number of trailing zeros in a factorial of a given number.
//
// N! = 1 * 2 * 3 * ... * N
//
// Be careful 1000! has 2568 digits...
//
// For more info, see: http://mathworld.wolfram.com/Factorial.html
//
// Examples
// zeros(6) = 1
// # 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero
//
// zeros(12) = 2
// # 12! = 479001600 --> 2 trailing zeros
// Hint: You're not meant to calculate the factorial. Find another way to find the number of zeros.