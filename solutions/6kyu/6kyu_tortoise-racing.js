function race(v1, v2, g) {
    if (v1 >= v2) {
        return null;
    } else {
        const totalTime = ((g/v2) / (1 - v1 / v2));
        // shorter version: const totalTime = g/(v2-v1)
        // perhaps this is why, sometimes it failed some of the random tests by 1 second
        const hours = Math.floor(totalTime);
        const minutes = Math.floor((totalTime - hours) * 60);
        const seconds = Math.floor(((totalTime - hours) - (minutes / 60)) * 3600);
        return [hours, minutes, seconds];
    }
}

console.log(race(720, 850, 70));
console.log(race(80, 100, 40));
console.log(race(500, 400, 60));



// Two tortoises named A and B must run a race. A starts with an average speed of 720 feet per hour. Young B knows she runs faster than A, and furthermore has not finished her cabbage.
//
// When she starts, at last, she can see that A has a 70 feet lead but B's speed is 850 feet per hour. How long will it take B to catch A?
//
// More generally: given two speeds v1 (A's speed, integer > 0) and v2 (B's speed, integer > 0) and a lead g (integer > 0) how long will it take B to catch A?
//
// The result will be an array [hour, min, sec] which is the time needed in hours, minutes and seconds (round down to the nearest second) or a string in some languages.
//
// If v1 >= v2 then return nil, nothing, null, None or {-1, -1, -1} for C++, C, Go, Nim, [] for Kotlin or "-1 -1 -1".
//
// Examples:
// (form of the result depends on the language)
//
// race(720, 850, 70) => [0, 32, 18] or "0 32 18"
// race(80, 91, 37)   => [3, 21, 49] or "3 21 49"
