/*****************
 You will be given an array with 5 numbers. The first 2 numbers represent a range,
 and the next two numbers represent another range. The final number in the array is X.
 The goal of your program is to determine if both ranges overlap by at least X numbers.
 For example, in the array [4, 10, 2, 6, 3] the ranges 4 to 10 and 2 to 6 overlap
  by at least 3 numbers (4, 5, 6), so your program should return true.*************** */

function OverlappingRanges(arr) {

    // Ranges should overlap by last array value or more
    let desiredOverlap = arr.pop();

    // Calculate actual overlap by defining narrower range wtih overlapped values
    // e.g. [4, 10] with [2, 6] becomes [4, 6]
    let lowerBound = Math.max(arr[0], arr[2]);
    let upperBound = Math.min(arr[1], arr[3]);

    // Calculate number of values in new range
    let actualOverlap = upperBound - lowerBound + 1;

    // Return true if actual overlap is at least desired overlap. Otherwise, return false.
    return actualOverlap >= desiredOverlap;
}
console.log(OverlappingRanges([4, 10, 2, 6, 3]));