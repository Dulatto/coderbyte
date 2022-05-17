/***************************************************************************************
*                                                                                      *
*                  CODERBYTE BEGINNER CHALLENGE                                        *
*                                                                                      *
*  First Reverse                                                                       *
*  Have the function FirstReverse() take the str parameter being passed and return     *
*  the string in reversed order.                                                       *
*                                                                                      *
*  SOLUTION                                                                            *
*  There is no reverse function for Strings in JavaScript BUT there is a reverse()     *
*  function for arrays.  I will use this built-in function for my solution.            *
*    1) Convert the string to an array using the split() function.                     *
*    2) Use Array Reverse() function.                                                  *
*    3) Convert array back to a string using join() function.                          *
*                                                                                      *
***************************************************************************************/

//Solution 1

// function FirstReverse(str) {
//     return str.split('').reverse().join('');
// }
// // keep this function call here 
// console.log(FirstReverse('Hello world'));


// Solution 2

// function FirstReverse(str) {
//     let strReverse = '';
//     for (let i = 0; i < str.length; i++) {
//         strReverse = str[i] + strReverse;

//     }
//     return strReverse;
// }
// // keep this function call here 
// console.log(FirstReverse('Hello world'));

// Solution 3

// function FirstReverse(str) {
//     let strReverse = '';
//     for (let char of str) {
//         strReverse = char + strReverse;

//     }
//     return strReverse;
// }
// // keep this function call here 
// console.log(FirstReverse('Hello world'));

// Solution 4

function FirstReverse(str) {

    const strToArr = str.split('');

    const reversedStr = strToArr.reduce((acc, cv) => {
        return cv + acc
    })
    return reversedStr
}
// keep this function call here 
console.log(FirstReverse('Hello world'));