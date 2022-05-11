//Have the function LetterCapitalize(str) take the str parameter
// being passed and capitalize the first letter of each word. 
//Words will be separated by only one space. 

//Solution 1 
function LetterCapitalize(str) {

    let arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join(" ");
}
console.log(LetterCapitalize('string to array of words by splitting on space'))