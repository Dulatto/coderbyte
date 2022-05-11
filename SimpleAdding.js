//Have the function SimpleAdding(num) add up all the numbers from 1 to num.
// For the test cases, the parameter num will be any number from 1 to 1000.

//Solution 1
function SimpleAdding(num) {
    // Create storage for sum
    let sum = 0;
    // Add all values from 1 to num, inclusive
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    // Return total after adding
    return sum;
}
console.log(SimpleAdding(10))
