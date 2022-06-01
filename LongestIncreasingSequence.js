/*Given an integer array nums, return the length of the longest strictly increasing subsequence.
A subsequence is a sequence that can be derived from an array by deleting some or no elements
 without changing the order of the remaining elements. For example, [3,6,2,7] is a subsequence
  of the array [0,3,1,6,2,2,7].

Example 1:

Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.*/

function LongestIncreasingSequence(arr) {

    /* 
     * First, create a function that recursively builds increasing sequences (IS).
     * The first parameter, start, represents the first value of each subarray.
     * The second parameter, arr, represents the rest of the subarray's values. 
     */

    function findLongestFromStart(start, arr) {

        // When the array is emptied, return 1 as base case.
        if (arr.length === 0) return 1;

        // Build array to capture lengths of all IS.
        let listLength = arr.map((elem, index) => {

            // When we encounter a larger term, build all subarrays from that value.
            // Add 1 to represent increased length caused by that term.
            if (elem > start) {
                return 1 + findLongestFromStart(arr[index], arr.slice(index + 1));
            }

            // If we encounter smaller terms, we stop their sequence at length of 1.
            return 1;
        });

        // LIS of this array is represented by the max value found in listLength
        return Math.max(...listLength);
    }

    // Create storage for LIS of all possible IS arrays
    let maxLength = 0;

    // Now we can loop through input array to calculate length of
    // all possible IS and update our max length accordingly.
    arr.forEach((elem, index) => {
        let longest = findLongestFromStart(elem, arr.slice(index + 1));
        if (longest > maxLength) maxLength = longest;
    });

    // Output represents longest increasing sequence!
    return maxLength;
}
console.log(LongestIncreasingSequence([10, 9, 2, 5, 3, 7, 101, 18]));