function test(val1,val2) {
    if(val1 != val2) {          //only check value and converting type(typeconvergen)
        return "Not Equal";
    }
    return "Equal";
}

function testStrict(val1,val2) {
    if(val1 !== val2) {         //check value and type
        return "Not Equal";
    }
    return "Equal";
}
console.log(test(7,"7"));
console.log(testStrict(7,"7"));
