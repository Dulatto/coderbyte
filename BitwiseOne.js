/* For this challenge you will perform a bitwise operation on two binary numbers.
 have the function BitwiseTwo(strArr) take the array of strings stored in strArr,
which will only contain two strings of equal length that represent binary numbers,
and return a final binary string that performed the bitwise AND operation on both strings. 
A bitwise AND operation places a 1 in the new string where there is a 1 in both locations
in the binary strings, otherwise it places a 0 in that spot.
For example: if strArr is ["10111", "01101"] then your program should return the string "00101" 
*/
function BitwiseOne(strArr) {

    // Need storage array to push 1 or 0 according to rules
    var answer = [];

    // If either character is 1, then 1 is pushed instead of 0.
    for (var i = 0; i < strArr[0].length; i++) {
        if (strArr[0][i] == 1 || strArr[1][i] == 1) {
            answer.push(1);
        } else {
            answer.push(0);
        }
    }

    // Answer array contains correct binary values. Return as joined string.
    return answer.join('');
}
console.log(BitwiseOne(["10111", "01101"]));