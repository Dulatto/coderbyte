//First reverse

//Solution 1

// function FirstReverse(str) {
//     return str.split('').reverse().join('');
// }
// // keep this function call here 
// console.log(FirstReverse('Hello world'));


// Solution 2

// function FirstReverse(str) {
//     let strReverse = '';
//     for (let i = 0; i < str.length; i++) {
//         strReverse = str[i] + strReverse;

//     }
//     return strReverse;
// }
// // keep this function call here 
// console.log(FirstReverse('Hello world'));

// Solution 3

// function FirstReverse(str) {
//     let strReverse = '';
//     for (let char of str) {
//         strReverse = char + strReverse;

//     }
//     return strReverse;
// }
// // keep this function call here 
// console.log(FirstReverse('Hello world'));

// Solution 4

function FirstReverse(str) {

    const strToArr = str.split('');

    const reversedStr = strToArr.reduce((acc, cv) => {
        return cv + acc
    })
    return reversedStr
}
// keep this function call here 
console.log(FirstReverse('Hello world'));