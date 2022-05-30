/********************************
 * This challenge requires you to determine at what index in an array
 *  the sequence changes from increasing to decreasing or vice versa.
 *  For example, if the array were [1, 2, 4, 6, 4, 3, 1] then your program
 *  should return 3 because at index 3 the sequence begins to change from
 *  increasing to decreasing. If there is no change in sequence, then your
 *  program should return -1.

To solve this challenge, we'll loop through the array checking
 if each change between numbers matches the prior change. 
 We do this until we reach a point in the array where the sequence changes. */

function ChangingSequence(arr) {

    // Calculate whether beginning with increasing or decreasing sequence
    let diff = arr[1] - arr[0];

    // Loop through sequence
    for (let i = 0; i < arr.length; i++) {

        // Readability
        let curr = arr[i];
        let next = arr[i + 1];

        // If increasing sequence, return index when stops increasing
        if (diff > 0) {
            if (curr > next) {
                return i;
            }
        }

        // If decreasing sequence, return index when stops decreasing
        if (diff < 0) {
            if (curr < next) {
                return i;
            }
        }
    }

    // If never find change of sequence, return -1.
    return -1;
}
console.log(ChangingSequence([1, 2, 4, 6, 8, 4, 3, 1]));