function friend(friends){
    const trueFriends = [];
    friends.forEach(person => person.length === 4 ? trueFriends.push(person) : '');
    return trueFriends;
}

console.log(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]));
console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]));


// Make a program that filters a list of strings and returns a list with only your friends name in it.
//
//     If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
//
// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
//
// Note: keep the original order of the names in the output.

// I like this solution best:
//
// function friend(friends){
//     return friends.filter(n => n.length === 4)
// }