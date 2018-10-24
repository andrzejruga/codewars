function findOdd(A) {
    const ascendingArr = A.sort((a, b) => a - b);
    function removeSame() {
        if (ascendingArr[0] === ascendingArr [1]) {
            ascendingArr.splice(0, 2);
            removeSame();
        } else {
            return ascendingArr[0];
        }
    }
    removeSame();
    return ascendingArr[0];
}

console.log(findOdd([5,4,3,2,1,5,4,3,2,10,10]));
console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));
console.log(findOdd([10]));


// Given an array, find the int that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.