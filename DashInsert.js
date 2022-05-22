/***************************************************************************************
*  Dash Insert                                                                         *
*  Using the JavaScript language, have the function DashInsert(str) insert dashes      *
*  ('-') between each two odd numbers in str. For example: if str is 454793 the        *
*  output should be 4547-9-3. Don't count zero as an odd number.                       *
*                                                                                      *
*  SOLUTION                                                                            *
*  I am going to loop through each number in the string. Test if number is odd using   *
*  modulus. If odd then check if next number is also odd. I have two odd numbers then  *
*  insert dash into the string.
*                                                                                      *
*  Steps for solution                                                                  *
*    1) Initialize idx to zero since using this as our counter                         *
*    2) Use While loop to loop thru string since we will be adding dashes to it        *
*    3) If currrent character is odd and so is next character then insert dash         *
*    4) return modified string as answer                                               *
*                                                                                      *
***************************************************************************************/

// function DashInsert(str) {

//     var idx = 0;
//     while (idx < str.length - 1) {
//         if (Number(str[idx]) % 2 === 1 && Number(str[idx + 1]) % 2 === 1) {
//             str = str.slice(0, idx + 1) + "-" + str.slice(idx + 1);
//             idx = idx + 2;
//         }
//         else {
//             idx++;
//         }
//     }
//     return str;

// }
// console.log(DashInsert('454793'));
// console.log(DashInsert('53976655'));

// Solution 2

function DashInsert(str) {

    // Storage for pushing integers and dashes
    let answer = [];

    // Loop through array
    for (let i = 0; i < str.length; i++) {

        // Number will always be pushed as integer
        answer.push(parseInt(str[i]));

        // If odd integer followed by odd integer, push dash
        if (parseInt(str[i]) % 2 === 1 && parseInt(str[i + 1]) % 2 === 1) {
            answer.push('-');
        }
    }

    // Odd pairs will have exactly one dash between them!
    return answer.join('');
}

console.log(DashInsert('454793'));
console.log(DashInsert('53976655'));