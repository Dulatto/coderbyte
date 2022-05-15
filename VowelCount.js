/***************************************************************************************
*                                                                                      *
*                  CODERBYTE BEGINNER CHALLENGE                                        *
*                                                                                      *
*  Vowel Count                                                                         *
*  Using the JavaScript language, have the function VowelCount(str) take the str       *
*  string parameter being passed and return the number of vowels the string contains   *
*  (ie. "All cows eat grass" would return 5). Do not count y as a vowel for this       *
*  challenge.                                                                          *
*                                                                                      *
*  SOLUTION                                                                            *
*  I will be using two for loops that will be nested. I will be searching thru all     *
*  entries in my vowel array in the outter loop and searching through each letter      *
*  in the string in the inner loop. I will be comparing each vowel to every letter     *
*  in the string. If it matches then I will be incrememting by total by 1.
*                                                                                      *
*  Steps for solution                                                                  *
*    1) create my vowel arrray.                                                        *
*    2) Initialize tot to zero.                                                        *
*    3) Loop through each vowel and compare to each letter in string                   *
*    4) If match then increment tot by 1                                               *
*    5) Return tot as answer                                                           *
*                                                                                      *
***************************************************************************************/

// Solution 1
// function VowelCount(str) {

//     let vowelArr = ["a", "e", "i", "o", "u"];
//     let tot = 0;

//     str = str.toLowerCase();

//     for (let i = 0; i < vowelArr.length; i++) {
//         for (let j = 0; j < str.length; j++) {
//             if (str[j] === vowelArr[i]) {
//                 tot++;
//             }
//         }
//     }
//     return tot;
// }

// console.log(VowelCount('All cows eat grass'))

//Solution 2

function VowelCount(str) {

    // Make all letters lowercase for conditional check in loop
    str = str.toLowerCase();

    // Create counter storage
    let counter = 0;

    // Loop through string
    for (let i = 0; i < str.length; i++) {

        // If character is a vowel, add 1 to counter
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
            counter++;
        }
    }

    // Counter represents total number of vowels in string
    return counter;
}
console.log(VowelCount('All cows eat grass'))