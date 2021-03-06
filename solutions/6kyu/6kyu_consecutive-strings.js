function longestConsec(strarr, k) {
    if (strarr.length === 0 || k > strarr.length || k <= 0) {
        return '';
    } else {
        const joinedArr = [];
        for (let i=0; i<strarr.length - k + 1; i++) {
            const sliced = strarr.slice(i, i+k);
            const joinedStr = sliced.join('');
            joinedArr.push(joinedStr);
        }
        const longest = joinedArr.reduce((a, b) => a.length >= b.length ? a : b);
        return longest;
    }
}

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 0));
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2));
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 4));
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 7));


// You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.
//
//     #Example: longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
//
// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".