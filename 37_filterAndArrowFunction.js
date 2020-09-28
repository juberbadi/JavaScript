//Filter Higher order
/*
'filter()' calls a provided callback function once for each element in an array,
and constructs a new array of all the values for which callback ...

'map()' calls a provided callback function once for each element in an array,
in order, and constructs a new array ..
*/

const numberArray = [2, -3, 5, 1, -6];

const filterHigherOrder = (arr) => {
    const filterInteger = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return filterInteger;
}
console.log(filterHigherOrder(numberArray));