function countSmileys(arr) {
    if (arr.length > 0) {
        const newArr = arr.map(item =>
            (item[0] === ':' || item[0] === ';')
                && (((item[1] === '-' || item[1] === '~')
                        && (item[2] === ')' || item[2] === 'D'))
                    || ((item[1] === ')' || item[1] === 'D')
                        && (typeof item[2] === 'undefined')))
            ? 1 : 0);
        return newArr.reduce((a, b) => a + b);
    } else {
        return 0;
    }
}

console.log(countSmileys([]));
console.log(countSmileys([':)', ';(', ';}', ':))']));
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']));
console.log(countSmileys([':D',':~)',';~D',':)']));

// Description:
//     Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.
//
//     Rules for a smiling face:
//     -Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// -A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
//     -Every smiling face must have a smiling mouth that should be marked with either ) or D.
//     No additional characters are allowed except for those mentioned.
//     Valid smiley face examples:
//     :) :D ;-D :~)
// Invalid smiley faces:
//     ;( :> :} :]
//
// Example cases:
//
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
//
// Note: In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same
//
// Happy coding!
