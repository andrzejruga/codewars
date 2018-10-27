function order(words){
    if (words === '') {
        return ''
    } else {
        const arr = words.split(' ');
        // I should have used regular expression instead of so many ifs
        // const mappedArr = arr.map(item => item.match(/\d/) + item);
        const mappedArr = arr.map(function (item) {
            if (item.includes('1')) {
                return '1' + item;
            } else if (item.includes('2')) {
                return '2' + item;
            } else if (item.includes('3')) {
                return '3' + item;
            } else if (item.includes('4')) {
                return '4' + item;
            } else if (item.includes('5')) {
                return '5' + item;
            } else if (item.includes('6')) {
                return '6' + item;
            } else if (item.includes('7')) {
                return '7' + item;
            } else if (item.includes('8')) {
                return '8' + item;
            } else if (item.includes('9')) {
                return '9' + item;
            }
        });
        mappedArr.sort();
        const sortedArr = mappedArr.map(item => item.substring(1));
        return sortedArr.join(' ');
    }
}

console.log(order("4of Fo1r pe6ople g3ood th5e the2"));
console.log(order(""));



// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
//
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
//
// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
//
// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""