// console.log("hey nik!!");

// in js, everything is an object, even a function a function as well as object. hence whatever is available for a object, is also avaialble to others.
// function myFunc1(num){
//     return num * 18;
// }

// const func1 = myFunc1(18);
// console.log(myFunc1, func1, myFunc1.prototype);
// myFunc1.power = 9; // since myFunc1 is also a object, we can have a property with a value to this func ({power : 9}) using '.' operator as we do for objects.

// console.log(myFunc1, func1, myFunc1.prototype);

// using the 'new' keyword creates a new instance of this object (func). also, this func becomes a constructor function and we can pass in parameters to this constructor function (this is same as we have in oops, where for a class, we can create an instance (object), and then through this instance, we can access it's constructor and pass in parameters if needed).
// function createChai(chaiType, price){
//     // we can say that since a func is also an object, hence "createChai" is also an object, "chaiType", "price" are it's properties
//     // 'this' ka mtlb hai 'jis'. 'jis' ke liye call kiye ya 'jis' ke liye value dale hai, uske liye hi update hoga
//     this.chaiType = chaiType;
//     this.price = price;
//     // console.log(chaiType, price);
// }

// const type1 = new createChai("chai", 5); // 'new' keyword create a instance (copy) of the func object. now we can access it's properties.
// const type2 = new createChai ("tea", 500);

// console.log(type2.chaiType, type2.price);
// console.log(type1, type2); // by default, if the constructor function doesn't have a return type, it returns the newly created object through the 'new' keyword with the values to the propeties passed in as parameters to this constructor function.

// we can also add new functions as properties to a func object using the prototype property

// createChai.prototype.increase = function (){
//     this.price++;
// };

// createChai.prototype.getPrice = function (){
//     console.log(`price of ${this.chaiType} is : ${this.price}`);
// };

// const type1 = new createChai("chai", 5); // 'new' keyword create a instance (copy) of the func object. now we can access it's properties.
// const type2 = new createChai ("tea", 500);

// console.log(type1.increase, type2.increase);
// console.log(type1.increase(), type2.increase());
// type1.increase();
// type2.increase();

// type1.getPrice(); // we can access the newly created function property to the "chaiType" object through the instance (object) we create using the "new" keyword.
// type2.getPrice();

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/


// **********prototype**************

// basic me smjhe to, we can just use this to define any new property to an existing object (this property can be a func, obj, or anything)

// const cricketers = ["virat", "dhoni", "rohit", "bumrah", "jadega"];

// const roles = ["batsman", "batsman", "batsman", "bowler", "all-rounder"];

// const playerRole = function (name, role) {
//     this.name = name;
//     this.role = role;
//     console.log(`${this.name} is a ${this.role}.`);
// }

// object is the highest level in the hierarchy, is level pe agr koi func add kr rhe hai to it will get added to all other below this (eg. arrays, functions, strings, etc.). iska vice-versa is not true.
// Object.prototype.getDetails = function () {
//     for(let i = 0; i < cricketers.length; i++){
//         playerRole(cricketers[i], roles[i]);
//     }
// }

// this will add getDetails func to all the arrays
// Array.prototype.getDetails = function () {
//     for(let i = 0; i < cricketers.length; i++){
//         playerRole(cricketers[i], roles[i]);
//     }
// }

// this will add getDetails to all the functions
// Function.prototype.getDetails = function () {
//     for(let i = 0; i < cricketers.length; i++){
//         playerRole(cricketers[i], roles[i]);
//     }
// }

// playerRole.getDetails(); // this will throw error as function is added on array level and hence won't be added to function, hence won't be accessible through functions.

// use case : the use case of adding properties through "prototype" can be to avoid redundancy i.e. suppose we want to define a function on all the objects, now instead ki hum har ek object pe jake func ko define kre, we will add it to all the objects through prototype.

// adding functions to strings through prototype

let sports  = "football      ";

String.prototype.actualLen = function(){
    console.log(`actual length of the string is ${this.trim().length}`); // jis string ke liye call hoga, 'this' will access that particular string and trim it and give length
};

sports.actualLen();
"nikhil anand".actualLen();
"anand".actualLen();