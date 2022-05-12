//Using the JavaScript language, have the function CheckNums(num1,num2)
// take both parameters being passed and return the string true if num2
// is greater than num1, otherwise return the string false.
// If the parameter values are equal to each other then return the string -1.

//Solution 1

// function CheckNums(num1, num2) {

//     // If the numbers are equal, return -1. Otherwise, return Boolean for whether num2 is greater than num1.
//     return (num1 == num2) ? -1 : num2 > num1;
// }

// console.log(CheckNums(5, 3));

// Solution 2

// function CheckNums(num1, num2) {

//     // code goes here  
//     return num1 == num2 ? "-1" : num2 > num1 ? " true" : "false";

// }

// console.log(CheckNums(3, 3));

// Solution 3

function CheckNums(num1, num2) {

    if (num1 === num2) {
        return -1;
    }
    if (num1 > num2) {
        return false;
    }
    else {
        return true;
    }

}


console.log(CheckNums(3, 3));
