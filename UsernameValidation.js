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

function CodelandUsernameValidation(str) {
    let userRegex = /^[a-z]{1}\w{2,23}[a-z|\d]{1}$/ig;
    return userRegex.test(str)
}

// keep this function call here 
console.log(CodelandUsernameValidation('u__hello_world123'));