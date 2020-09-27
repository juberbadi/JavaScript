var myMusic = [
    {
        artist : "Billy Joel",
        title : "Piano Man",
        formates : [
            "CD",
            "8T", 
            "LP"
        ],
        gold : true
    },

    {
        artist : "Beau Carnes",
        title : "Cereal Man",
        formates : ["YouTube Video"]
    }
];

//console.log(myMusic);
//accessing nested array
console.log(myMusic[0].formates[1]);
console.log(myMusic[1].title);