// For this challenge you will determine if each number is greater than the sum
// of all previous elements in an array. Have the function Superincreasing(arr)
// take the array of numbers stored in arr and determine if the array 
//forms a super-increasing sequence where each element in the array is
// greater than the sum of all previous elements. The array will only consist of positive integers.
// For example: if arr is [1, 3, 6, 13, 54] then your program should return the string "true"
// because it forms a superincreasing sequence. If a superincreasing sequence isn't formed,
// then your program should return the string "false" 

function Superincreasing(arr) {

    // Loop through array starting at second term
    for (let i = 1; i < arr.length; i++) {

        // Create array of values before current term
        let prevArr = arr.slice(0, i);

        // Sum up previous array
        let prevSum = prevArr.reduce(function (p, v) { return p + v });

        // If current term is ever less than or equal to
        // the sum of all numbers before it, then not superincreasing
        if (arr[i] <= prevSum) {
            return false;
        }
    }

    // If all values are greater than previous sum, sequence is superincreasing
    return true;
}
console.log(Superincreasing([1, 3, 6, 13, 54]));