// Solution 1

// function FirstFactorial(num) {

//     if (num < 0) {
//         return;
//     }
//     let result = 1;
//     for (let i = 1; i <= num; i++) {
//         result = result * i
//     }
//     return result;

// }

// // keep this function call here 
// console.log(FirstFactorial(3));

// Solution 2

// function FirstFactorial(num) {

//     if (num < 0) {
//         return;
//     }
//     let result = 1;
//     for (let i = num; i > 0; i--) {
//         result = result * i
//     }
//     return result;

// }

// // keep this function call here 
// console.log(FirstFactorial(3));


// Solution 2

// function FirstFactorial(num) {

//     if (num < 0) {
//         return;
//     }
//     let result = 1;
//     for (let i = num; i > 0; i--) {
//         result = result * i
//     }
//     return result;

// }

// // keep this function call here 
// console.log(FirstFactorial(3));


// Solution 3

// function FirstFactorial(num) {

//     if (num < 0) {
//         return;
//     } else if (num === 0) {
//         return 1;
//     } else {
//         return num * FirstFactorial(num - 1);
//     }
// }
// // keep this function call here 
// console.log(FirstFactorial(3));


// Solution 4

function FirstFactorial(num) {

    let result = num;
    if (num < 0) {
        return;
    } else if (num === 0) { return 1; }

    while (num > 1) {
        num--;
        result = result * num
    }
    return result;
}
// keep this function call here 
console.log(FirstFactorial(3));