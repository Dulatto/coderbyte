/***************************************************************************************
*  Second Great Low                                                                    *
*  Using the JavaScript language, have the function SecondGreatLow(arr) take the array *
*  of numbers stored in arr and return the second lowest and second greatest numbers,  *
*  respectively, separated by a space. For example: if arr contains                    *
*  [7, 7, 12, 98, 106] the output should be 12 98. The array will not be empty and     *
*  will contain at least 2 numbers. It can get tricky if there's just two numbers!     *                                              *
*                                                                                      *
*  SOLUTION                                                                            *
*  This challenge has one outlier and that is if there are only two elements in the    *
*  array. In that case you sort the pair and return each entry as the second highest   *
*  and second lowest.                                                                  *
*  Outside of that I am going to sort the array in ascending order and remove          *
*  duplicate values. Then retorn the second entry and the next to last entry.          *
*                                                                                      *
*  Steps for solution                                                                  *
*    1) Check for outlier of array with only two entries                               *
*    2) Sort array in ascending order                                                  *
*    3) Remove duplicate values                                                        *
*    4) Return second and next to last values for answer                               *
*                                                                                      *
***************************************************************************************/
// function SecondGreatLow(arr) {

//     if (arr.length === 2) {
//         arr.sort(function (a, b) { return a - b });
//         return arr[1] + " " + arr[0];
//     }

//     var uniqueArray = arr.filter(function (item, pos) {
//         return arr.indexOf(item) == pos;
//     });

//     if (uniqueArray.length > 2) {
//         uniqueArray.sort(function (a, b) { return a - b });
//         return uniqueArray[1] + " " + uniqueArray[uniqueArray.length - 2];
//     }
//     else {
//         return uniqueArray[1] + " " + uniqueArray[0];
//     }

// }
// console.log(SecondGreatLow([7, 7, 12, 98, 106]))

// Solution 2
function SecondGreatLow(arr) {

    // Sort array in ascending order
    let sorted = arr.sort(function (a, b) { return a - b; });

    // Edge case: if only two digits, we simply reverse them.
    if (arr.length === 2) {
        return sorted.reverse().join(' ');
    }

    // Store the largest and smallest values
    let highest = arr[arr.length - 1];
    let smallest = arr[0];

    // Create solution storage
    let answer = [];

    // Loop through array
    for (let i = 0; i < arr.length; i++) {

        // If value is not equal to highest or lowest, store in answer array
        if (arr[i] !== highest && arr[i] !== smallest) {
            answer.push(arr[i]);
        }
    }

    // Sort new array without largest and smallest values in ascending order
    let newSort = answer.sort(function (a, b) { return a - b; });

    // Newly sorted array will have the second lowest and second greatest terms as first and last terms, respectively.
    return answer[0] + " " + answer[answer.length - 1];
}
console.log(SecondGreatLow([7, 7, 12, 98, 106]))