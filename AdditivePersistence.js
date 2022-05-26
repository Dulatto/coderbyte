/***************************************************************************************

*  Additive Persistence                                                                *
*  Using the JavaScript language, have the function AdditivePersistence(num) take the  *
*  num parameter being passed which will always be a positive integer and return its   *
*  additive persistence which is the number of times you must add the digits in num    *
*  until you reach a single digit. For example: if num is 2718 then your program       *
*  should return 2 because 2 + 7 + 1 + 8 = 18 and 1 + 8 = 9 and you stop at 9.         *                                              *
*                                                                                      *
*  SOLUTION                                                                            *
*  The challenge passes a string but it expects us to do Math on it so it needs to     *
*  be converted to numbers. I will use the base 10 parameter of the toString()         *
*  function and the map() function to convert each entry in the array to a Number.     *
*  Then I am going to sum each entry in the array to get a total. I will repeat this   *
*  until my total is a single digit number. The number of times I sum is returned      *
*  as the answer.                                                                      *
*                                                                                      *
*  Steps for solution                                                                  *
*    1) Initialize vars sum and loop                                                   *
*    2) Convert str to an array of numbers                                             *
*    3) Loop until the sum of digits in array is a single digit number                 *
*    4) Return number of loops as answer                                               *
*                                                                                      *
***************************************************************************************/
// function AdditivePersistence(num) {

//     var sum, loop = 0;
//     var val1 = num.toString(10).split("").map(function (t) { return parseInt(t) });

//     while (val1.length > 1) {
//         sum = 0;
//         val1.forEach(function (number) {
//             sum = sum + number;
//         });

//         val1 = sum.toString(10).split("").map(function (t) { return parseInt(t) });
//         loop++;
//     }

//     return loop;
// }
// console.log(AdditivePersistence(5567954))

//Solution 2
function AdditivePersistence(num) {

    // Convert number to array of digits
    function numToArray(n) {
        return n.toString(10).split("").map(function (val) { return parseInt(val) });
    }

    // Initialize integer array
    let intArr = numToArray(num);

    // Keep track of number of times digits are combined a.k.a. additive persistence
    let count = 0;

    // Repeatedly sum digits, create new integer array for each sum, and increase counter until last digit left
    while (intArr.length > 1) {
        let newDigits = intArr.reduce(function (p, v) { return p + v });
        intArr = numToArray(newDigits);
        count++;
    }

    // The counter represents additive persistence of a number!
    return count;
}

console.log(AdditivePersistence(5567954))