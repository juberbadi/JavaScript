function checkEqual(a, b) {
    return a === b ? true : false;
}
console.log(checkEqual(1, 2));

//multipal ternary operator
function checkSign(num) {
    return num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
}
console.log(checkSign(10));