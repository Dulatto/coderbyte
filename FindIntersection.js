//Find Intersection
//Have the function FindIntersection(strArr) read the array of strings stored
// in strArr which will contain 2 elements: the first element will represent
// a list of comma-separated numbers sorted in ascending order,
// the second element will represent a second list of comma-separated
// numbers (also sorted). Your goal is to return a comma-separated string containing
// the numbers that occur in elements of strArr in sorted order. 
//If there is no intersection, return the string false.

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