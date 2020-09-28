//'(...)' is a rest operator
/*The reduce() method reduces the array to a single value. The reduce() 
method executes a provided function for each value of the array 
(from left-to-right). The return value of the function is stored in an 
accumulator (result/total). Note: reduce() does not execute the function 
for array elements without values.
*/

function addition(x, y, z) {
    const args = [x, y, z];
    return args.reduce((a, b) => a + b, 0);
}
console.log(addition(1, 2, 3));

//or
function addition(...args) {
    return args.reduce((a, b) => a + b, 0);
}
console.log(addition(1, 2, 3, 4));