function reOrdering(text){
    const arr = text.split(' ');
    for (let i=0; i < arr.length; i++) {
        if (arr[i][0] === arr[i][0].toUpperCase()) {
            const secondArr = arr.splice(i, 1);
            arr.unshift(secondArr[0]);
            return arr.join(' ');
        }
    }
}

console.log(reOrdering('bull color pig Patrick'));


// There is a sentence which has a mistake in it's ordering.
//
// The part with a capital letter should be the first word.
//
// Please build a function for re-ordering
//
// Examples
// >>> re_ordering('ming Yao')
// 'Yao ming'
//
// >>> re_ordering('Mano donowana')
// 'Mano donowana'
//
// >>> re_ordering('wario LoBan hello')
// 'LoBan wario hello'
//
// >>> re_ordering('bull color pig Patrick')
// 'Patrick bull color pig'