//Solution 1
function FindIntersection(strArr) {

    let a = strArr[0].split(', ');
    let b = strArr[1].split(', ');

    let result = a.filter(x => b.find(a => a === x));

    // code goes here  
    return result.length > 0 ? result.join(',') : false;

}

// keep this function call here 
console.log(FindIntersection(["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]));