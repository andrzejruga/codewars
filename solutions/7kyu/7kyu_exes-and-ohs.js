function XO(str) {
    let xCounter = 0, oCounter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === 'x') {
            xCounter += 1;
        }
        if (str[i].toLowerCase() === 'o') {
            oCounter += 1;
        }
    }
    return xCounter === oCounter ? true : false;
}

console.log(XO("xxOo"));
console.log(XO("xxOoX"));
console.log(XO("xxxm"));



// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
//
// Examples input/output:
//
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false