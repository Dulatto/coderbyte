/**   For this challenge you will determine the largest double digit number.
// have the function LargestPair(num) take the num parameter being passed
 and determine the largest double digit number within the whole number.
  For example: if num is 4759472 then your program should return 94 because
   that is the largest double digit number. The input will always contain
    at least two positive digits. 

*/
function LargestPair(num) {

    // Convert to string for looping
    var str = num.toString();

    // Store largest double digit pair 
    var highest = 0;

    // Construct double digit number by making current digit the tens place
    // and the next digit the ones place, then combine
    for (var i = 0; i < str.length - 1; i++) {
        var tens = Number(str[i]);
        var unit = Number(str[i + 1]);
        var curr = tens * 10 + unit;

        // Update highest value if found larger double digit number
        if (curr > highest)
            highest = curr;
    }

    // Let the world know the largest double digit pair!
    return highest;
}
console.log(LargestPair(4759472));