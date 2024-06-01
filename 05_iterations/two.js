// "for of" loop -- this can't be used to iterate over a constant variable

// const nums = ["nikhil", "anand", 25, "Microsoft"];

const bio = "Nikhil Anand, 25 years old programmer who wants to become a sde in microsoft! ";

// for (const val of nums) {
//     console.log(val);
// }

// let currInfo = "";
// for (const info of bio) {
//     if(info == " " || info == ","){
//         if(currInfo != ""){
//             console.log(currInfo);
//             currInfo = "";
//         }
//         continue;
//     }
//     currInfo += info;
// }

// maps in js

const myMap = new Map();

myMap.set("IN", "INDIA");
myMap.set("AUS", "AUSTRALIA");
myMap.set("RSA", "SOUTH AFRICA");
myMap.set("USA", "UNITED STATES OF AMERICA");

// console.log(myMap);

// iterating over a map in JS!

// for (const [mpKey, mpVal] of myMap) {
//     console.log(mpKey, mpVal);
// }


// for in loop doesn't work on js map, we can use the for of loop
for (const [mpKey, mpVal] in myMap) {
    console.log(mpKey, mpVal);
}

const myObj = {
    "IN" : "INDIA",
    "AUS" : "AUSTRALIA",
    "RSA" : "SOUTH AFRICA",
    "USA" : "UNITED STATES OF AMERICA"
}

// objects can't be iterated through for of loop
for (const objVal in myObj) {
    // console.log(objVal, myObj[objVal]);
}


// by default for of loop gives us value whereas for in loop gives us key

// for each loop

let codingLang = ["cpp", "java", "ruby", "python", "swift", "javascript"];

// this callback function takes 3 parametes and don't have a name, it just have the "function" keyword. the parameters have fixed order i.e. 1st param = each value, 2nd param = each index, 3rd param = complete array
codingLang.forEach(function (val, index, codingLang) {
    // console.log(codingLang);
    // console.log(index, val);
});

// we can also use the arrow function as the callback function

codingLang.forEach((val, index) => {
    // console.log(codingLang);
    // console.log(index, val);
});

let myCodingLang = [
    {
        codingLanguage : "c++",
        codingLangFileName : "cpp"
    },
    {
        codingLanguage : "python",
        codingLangFileName : "py"
    },
    {
        codingLanguage : "javascript",
        codingLangFileName : "js"
    }
];

// for each loop doesn't return anything

myCodingLang.forEach(function(item, index, arr){
    console.log(item); 
    console.log(item.codingLanguage, item.codingLangFileName);
    console.log(Object.keys(item));
    console.log(Object.keys(item)[0], Object.keys(item)[1]);
    console.log(index);
    console.log(arr);  
});
