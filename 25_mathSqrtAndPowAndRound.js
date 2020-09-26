//The Math.sqrt() function returns the square root of a number, value >= 0
//The Math. pow() function returns the base to the exponent power, that is, baseexponent
//The Math.round() function returns the value of a number rounded to the nearest integer

function abTest(a, b) {
    if(a < 0 || b < 0) {
        return undefined;
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b),2));
}
console.log(abTest(2, 2));