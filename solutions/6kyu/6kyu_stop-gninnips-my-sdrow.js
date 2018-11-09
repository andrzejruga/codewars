function spinWords(str){
    const splitted = str.split(' ');
    const mapped = splitted.map(item => {
        return item.length >= 5 ? item.split('').reverse().join('') : item;
    });
    return mapped.join(' ');
}

console.log(spinWords("Just kidding there is still one more"));


// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
//
// Examples:
//
// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
// spinWords( "This is a test") => returns "This is a test"
// spinWords( "This is another test" )=> returns "This is rehtona test"