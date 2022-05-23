/***************************************************************************************

*  Number Addition                                                                     *
*  Using the JavaScript language, have the function NumberSearch(str) take the str     *
*  parameter, search for all the numbers in the string, add them together, then        *
*  return that final number. For example: if str is "88Hello 3World!" the output       *
*  should be 91. You will have to differentiate between single digit numbers and       *
*  multiple digit numbers like in the example above. So "55Hello" and "5Hello 5"       *
*  should return two different answers. Each string will contain at least one letter   *
*  or symbol.                                                                          *
*                                                                                      *
*  SOLUTION                                                                            *
*  I only want numbers in the string so I am using RegExp to remove everything that    *
*  is not a number. Then convert that to an array. Loop thru each number in the array  *
*  and add tot to get the answer.                                                      *
*                                                                                      *
*  Steps for solution                                                                  *
*    1) Initialize tot to zero                                                         *
*    2) Remove everything but numbers from string and convert to array                 *
*    3) Loop thru each number in array and add to tot                                  *
*    4) Return tot for answer                                                          *
*                                                                                      *
***************************************************************************************/

// function NumberAddition(str) {

//     var tot = 0;

//     str = str.replace(/[^0-9\.]+/g, " ").split(" ");
//     for (var i = 0; i < str.length; i++) {
//         tot += Number(str[i]);
//     }

//     return tot;

// }
// console.log(NumberAddition('88Hello 3World!'));

// Solution 2

function NumberAddition(str) {

    // No regex or eval used!

    // Found deep integer check on Stack Overflow by Starx
    function isNumeric(n) {
        return !isNaN(parseInt(n)) && isFinite(n);
    }

    // Need one storage array for temporary consecutive digits 
    // and another to combine those into the actual multiple-digit number they represent
    let digits = [];
    let realNumbers = [];

    // Loop through string
    for (let i = 0; i < str.length; i++) {

        // Readability!
        let char = str[i];
        let nextChar = str[i + 1];

        // If current character is an integer, push that value to digits array
        if (isNumeric(char) === true) {
            digits.push(char);

            // If next character is NOT an integer, then current number is finished,
            // so push previously consecutive digits to realNumbers array and clear digits for next loop.
            if (isNumeric(nextChar) === false) {
                realNumbers.push(digits.join(''));
                digits = [];
            }
        }
    }

    // If no numbers exist in string, return 0. If numbers do exist, add 'em up!
    return realNumbers.length ? realNumbers.reduce(function (p, v) { return parseInt(p) + parseInt(v); }) : 0;
}

console.log(NumberAddition('88Hello 3World!'));