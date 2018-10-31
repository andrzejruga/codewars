function anagrams(word, words) {
    const wordAscending = word.split('').sort().join('');
    const matchingWords = words.filter(item => item.split('').sort().join('') === wordAscending);
    return matchingWords;
}

console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));

// The task was also to write own tests, so I did it like this:
// Test.describe("Basic testing", function() {
//     it("should test for something", function() {
//         Test.assertSimilar(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']), ['carer', 'racer'])
//         Test.assertSimilar(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']), ['aabb', 'bbaa'])
//         Test.assertSimilar(anagrams('laser', ['lazing', 'lazy',  'lacer']), [])
//     });
// });



// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:
//
// 'abba' & 'baab' == true
// 'abba' & 'bbaa' == true
// 'abba' & 'abbba' == false
//
// 'abba' & 'abca' == false
// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:
//
// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']
// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []