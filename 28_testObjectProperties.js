var laptop = {
    "company" : "Dell",
    "storage" : "1TB",
    "processor" : "i5 7gen",
    "cable" : 1
};
function checkObj(checkProp) {
    if(laptop.hasOwnProperty(checkProp)) {      //The hasOwnProperty() method in JavaScript is used to check whether the object has the specified property as its own property.
        return laptop[checkProp];
    }
    else {
        return "Not Found";
    }
}
console.log(checkObj("storage"));
console.log(checkObj("number"));