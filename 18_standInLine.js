function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}

var testArr = [1, 2, 3, 4, 5];

console.log("Before : " + JSON.stringify(testArr)); //The JSON.stringify() method converts a JavaScript object or value to a JSON string
console.log(nextInLine(testArr,6));
console.log("After : " + JSON.stringify(testArr));