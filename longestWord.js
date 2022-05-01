//Solution 1

function LongestWord(sen) {

    let arr = sen.match(/[a-z]+/gi);
    let sorted = arr.sort(function (a, b) {
        return b.length - a.length
    });

    sen = sorted[0];
    return sen;

}

// keep this function call here 
console.log(LongestWord('fun&!! time'));