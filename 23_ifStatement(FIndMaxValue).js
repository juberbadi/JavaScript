function findMaxValue(val1, val2, val3) {
    if(val1 > val2 && val1 > val3){
        return "Val1 is Maximum : " + val1;
    }
    else if(val2 > val1 && val2 > val3) {
        return "Val2 is Maximum : " + val2;
    }
    else if(val3 > val1 && val3 > val2) {
        return "Val3 is Maximum : " + val3;
    }
    else {
        return "Enter all Different Value";
    }
}
console.log(findMaxValue(10,20,7));