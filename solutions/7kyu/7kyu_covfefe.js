function covfefe(str){
    return str.includes('coverage') ? str.replace(/coverage/gi, 'covfefe') : str.concat(' covfefe');
}

console.log(covfefe("double space "));
console.log(covfefe("inside gocoveragego"));
console.log(covfefe("nothing"));
console.log(covfefe("coverage coverage"));



// Covfefe
// Your are given a string. You must replace the word(s) coverage by covfefe, however, if you don't find the word coverage in the string, you must add covfefe at the end of the string with a leading space.
//
// For the languages where the string is not immutable (such as ruby), don't modify the given string, otherwise this will break the test cases.