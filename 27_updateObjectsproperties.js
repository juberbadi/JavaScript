//Creating Object
var laptop = {
    "company" : "Dell",
    "storage" : "1TB",
    "processor" : "i5 7gen",
    "cable" : 1
};
laptop.storage = "2TB";     //update object properties
laptop.ssd = "250GB";       //add object properties. latop[ssd] = "250GB"
delete laptop.cable;        //delete object properties. laptop[cable]
console.log(laptop);
console.log(laptop.processor);  
console.log(laptop["ssd"]); 