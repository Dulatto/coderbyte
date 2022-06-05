/**************
 The two sum problem is a common interview question, and it is a variation of the subset sum problem.
  There is a popular dynamic programming solution for the subset sum problem, but for the two sum
   problem we can actually write an algorithm that runs in O(n) time. The challenge is to find all
    the pairs of two integers in an unsorted array that sum up to a given S. 
    For example, if the array is [3, 5, 2, -4, 8, 11] and the sum is 7, 
    your program should return [[11, -4], [2, 5]] because 11 + -4 = 7 and 2 + 5 = 7.
*****************/
function TwoSum(arr) {

    // Remove and store first integer
    let target = arr.shift();

    // Store length for loops
    const LEN = arr.length;

    // Create storage array for sum pair subarrays
    let answer = [];

    // Add each term to rest of terms one by one
    for (let i = 0; i < LEN; i++) {
        for (let j = i + 1; j < LEN; j++) {

            // If both integers add to target, push as subarray then end inner loop since pair was found
            if (arr[i] + arr[j] === target) {
                answer.push([arr[i], arr[j]]);
                break;
            }
        }
    }

    // If subarray pairs stored, join with space. Otherwise, return -1.
    return (answer.length > 0) ? answer.join(' ') : -1;
}
console.log(TwoSum([3, 5, 2, -4, 8, 11]));