function whoIsNext(names, r){
    const queueLength = r + names.length;
    let fullRound = 0;
    for (let i = 0; i < r; i++) {
        if (queueLength / names.length <= Math.pow(2, i)) {
            fullRound = i - 1;
            break;
        }
    }
    const lastFullRoundStart = (Math.pow(2, fullRound)) * names.length; // order after last full orbit
    const fullRoundSameNames = lastFullRoundStart / names.length; // how many same names in a row after last full orbit
    const whichInLine = r <= names.length ? r : r - lastFullRoundStart + names.length; // after last full orbit
    const whichInArray = Math.ceil(whichInLine / fullRoundSameNames) - 1; // which in original array
    return names[whichInArray];
}

console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 1));
console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 4));
console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 5)); // 10 po 2 runda 1
console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 15)); // 20 po 4 runda 2
console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 35)); // 40 po 8 runda 3
console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 75)); // 80 po 16 runda 4
console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 155)); // 160 po 32 runda 5
console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 36));
console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 52));
console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 74));
console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 177));
console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 7230702951));


// Sheldon, Leonard, Penny, Rajesh and Howard are in the queue for a "Double Cola" drink vending machine; there are no other people in the queue. The first one in the queue (Sheldon) buys a can, drinks it and doubles! The resulting two Sheldons go to the end of the queue. Then the next in the queue (Leonard) buys a can, drinks it and gets to the end of the queue as two Leonards, and so on.
//
// For example, Penny drinks the third can of cola and the queue will look like this:
//
// Rajesh, Howard, Sheldon, Sheldon, Leonard, Leonard, Penny, Penny
// Write a program that will return the name of the person who will drink the n-th cola.
//
// Input
// The input data consist of an array which contains at least 1 name, and single integer n.
//
// 1  ≤  n  ≤  1000000000
// Output / Examples
// Return the single line — the name of the person who drinks the n-th can of cola. The cans are numbered starting from 1.
//
// whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 1) == "Sheldon"
// whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 52) == "Penny"
// whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 7230702951) == "Leonard"