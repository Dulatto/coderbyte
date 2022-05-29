/**Using the JavaScript language, have the function MultiplicativePersistence(num)
 *  take the num parameter being passed which will always be a positive integer 
 * and return its multiplicative persistence which is the number of times you
 *  must multiply the digits in num until you reach a single digit. 
 * For example: if num is 39 then your program should return 3 because 3 * 9 = 27
 *  then 2 * 7 = 14 and finally 1 * 4 = 4 and you stop at 4.  */

function MultiplicativePersistence(num) {

    // Convert number to array of digits
    function numToArray(n) {
        return n.toString(10).split("").map(function (val) { return parseInt(val) });
    }

    // Initialize integer array
    let intArr = numToArray(num);

    // Keep track of number of times digits are combined a.k.a. multiplicative persistence
    let count = 0;

    // Repeatedly multiply digits, create new integer array for each product, and increase counter until last digit left
    while (intArr.length > 1) {
        let newDigits = intArr.reduce(function (p, v) { return p * v });
        intArr = numToArray(newDigits);
        count++;
    }

    // The counter represents multiplicative persistence of a number!
    return count;
}
console.log(MultiplicativePersistence(47))