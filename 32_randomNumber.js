//The Math.random() function returns a floating-point, pseudo-random number in the range 0 to less than 1
function randomFraction() {
    return Math.random();
}
console.log(randomFraction());

//random whole number
//The Math.floor() function returns the largest integer less than or equal to a given number.
function randomWholeNumber() {
    return Math.floor(Math.random() * 10);
}
console.log(randomWholeNumber());