//create a function using variable
var magic = function() {
    return new Date();
}
console.log(magic());

//creating function using 'arrow' function
//Don't need to a 'return' keyword and '{ }'.
var date = () => new Date();

console.log(date());