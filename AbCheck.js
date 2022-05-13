// Have the function ABCheck(str) take the str parameter being passed and return
// the string true if the characters a and b are separated by exactly 3 places
// anywhere in the string at least once (ie. "lane borrowed" would result in
// true because there is exactly three characters between a and b). Otherwise
// return the string false.

//Solution 1

// function ABCheck(str) {

//     var match = str.search(/a...b/);
//     if (match > -1) {
//         return "true";
//     }
//     else {
//         return "false";
//     }

// }
// console.log(ABCheck('lane borrowed'))

//Solution 2

function ABCheck(str) {

    for (var i = 0; i < str.length - 4; i++) {
        if (str[i].match(/[abAB]/)) {
            if (str[i + 4].match(/[abAB]/)) {
                return true;
            }
        }
    }
    // code goes here  
    return false;
}
console.log(ABCheck('lane borrowed'))