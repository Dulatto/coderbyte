//Have the function CodelandUsernameValidation(str) take the str parameter being passed and determine 
//if the string is a valid username according to the following rules:

//1. The username is between 4 and 25 characters.
//2. It must start with a letter.
//3. It can only contain letters, numbers, and the underscore character.
//4. It cannot end with an underscore character.

//If the username is valid then your program should return the string true, otherwise return the string false.

//Solution 1
// function CodelandUsernameValidation(str) {

//     // code goes here  
//     let valid_reg = /^[A-Za-z]\w+[A-Za-z0-9]$/;
//     let validLenght = (str) => str.length >= 4 && str.length <= 25;
//     return valid_reg.test(str) && validLenght(str);

// }

// // keep this function call here 
// console.log(CodelandUsernameValidation('u__hello_world123'));

//Solution 2

// function CodelandUsernameValidation(str) {
//     let userRegex = /^[a-z]{1}\w{2,23}[a-z|\d]{1}$/ig;
//     return userRegex.test(str)
// }

// // keep this function call here 
// console.log(CodelandUsernameValidation('u__hello_world123'));

// Solution 3

function CodelandUsernameValidation(str) {
    const regex = /^[a-zA-Z][a-zA-Z0-9_]*[^_]$/g
    return str.length >= 4 && str.length <= 25 && regex.test(str)
}

// keep this function call here 
console.log(CodelandUsernameValidation('u__hello_world123'));