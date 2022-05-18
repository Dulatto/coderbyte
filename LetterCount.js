/***************************************************************************************
*  Letter Count I                                                                      *
*  Have the function LetterCountI(str) take the str parameter being passed and return  *
*  the first word with the greatest number of repeated letters. For example:           *
*  "Today, is the greatest day ever!" should return greatest because it has 2 e's      *
*  (and 2 t's) and it comes before ever which also has 2 e's. If there are no words    *
*  with repeating letters return <b>-1</b>. Words will be separated by spaces.         *
                                                 *
*                                                                                      *
*  SOLUTION                                                                            *
*  The first step is to remove all punctuation from the string being passed in which   *
*  I do with the replace function. I also convert string to LowerCase to account for   *
*  any words in the string that might be ProperCase. I then convert string into an     *
*  array of words breaking on space. Next I loop through each word in the array.       *
*  I loop through each character in the word and count the number of times the letter  *
*  repeats. Then I compare the max times a letter is repeated in that word to the      *
*  current value of maxCt which is initalized with a value of 1. If the number of      *
*  repeated characters is greater then I update the maxCt with the new value and the   *
*  current word is the maxWord.  When finished loop I check to see if any word has     *
*  repeated characters and if not return -1 else return the word with max repeated     *
*  characters.                                                                         *
*                                                                                      *
*  Steps for solution                                                                  *
*    1) Initialize variables                                                           *
*    2) Convert string to lowerCase, remove all punctuation and store in array         *
*    3) Loop through each word in array and count the occurance of each letter         *
*    4) Compare occurance of repeated letter to maxCt                                  *
*    5) If greater update maxCt to new value and store word in maxWord                 *
*    6) Return word with max repeated characters or -1                                 *
*                                                                                      *
***************************************************************************************/

// function LetterCountI(str) {
//     var ctObj, tempWord, maxWord, maxCt = 1;
//     var arr = str.toLowerCase().replace(/[^a-zA-Z ]/g, "").split(" ");

//     for (var i = 0; i < arr.length; i++) {
//         tempWord = arr[i];
//         ctObj = {}

//         for (var j = 0; j < tempWord.length; j++) {
//             ctObj[tempWord[j]] = ctObj[tempWord[j]] || 0;
//             ctObj[tempWord[j]]++;
//         }
//         for (var key in ctObj) {
//             if (ctObj.hasOwnProperty(key)) {
//                 if (ctObj[key] > maxCt) {
//                     maxCt = ctObj[key];
//                     maxWord = tempWord;
//                 }
//             }
//         }
//     }

//     if (maxCt === 1) {
//         return -1;
//     } else {
//         return maxWord;
//     }
// }
// console.log(LetterCountI('Today, is the greatest day ever!'))

//Solution 2
function LetterCountI(str) {

    // Create object to store word objects, which will contain key-value pairs of letter: count and highest: #
    let table = {};

    // Break string into separate words
    let arr = str.split(' ');

    // Loop through words
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];

        // Give each word a 'highest' property to tell us its highest letter count
        table[word] = { highest: 1 };

        // Loop through letters of each word
        for (let j = 0; j < word.length; j++) {
            let letter = word[j];

            // If letter doesn't exist in word object, create it with a value of 1
            if (table[word][letter] === undefined) {
                table[word][letter] = 1;

                // If letter exists, add 1 to its count and update highest if this letter has the new highest count in that word
            } else {
                table[word][letter]++;
                if (table[word][letter] > table[word]['highest']) {
                    table[word]['highest'] = table[word][letter];
                }
            }
        }
    }

    // Create storage for word with highest count
    let answer = { word: null, highest: 1 };

    // Loop through words in table to track highest count per word
    for (let w in table) {

        // If current word's highest count is greater than the overall highest, replace highest and store associated word
        if (table[w]['highest'] > answer['highest']) {
            answer['highest'] = table[w]['highest'];
            answer['word'] = w;
        }
    }

    // If no letters repeat in any word, return -1. Otherwise, return word with the most repeated letters!
    return (answer['highest'] > 1) ? answer['word'] : -1;
}
console.log(LetterCountI('Today, is the greatest day ever!'))