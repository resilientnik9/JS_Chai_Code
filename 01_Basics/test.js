// console.log("Nikhil Anand!");

// const id1 = Symbol('18');
// const id2 = Symbol('18');

// console.log(id1, id2);
// console.log(id1 === id2);
// console.log(id1 == id2);

const fullName = "Nikhil_Anand"; // datatype for this is string
const yourName = new String("Anand Nikhil"); // data type for this is an object, it return an object having different methods of string datatype
// console.log(fullName, fullName[0], typeof fullName);
// console.log(yourName, yourName[0], typeof yourName);

// console.log(fullName.substring(1, 4));


// console.log(yourName.slice(-4, -1));

const age = 18.199;
// console.log(typeof age);
// console.log(typeof age.toFixed(1));
// hitesh-hc

// slice and substring both works same, takes the pos from where we have to start, second parameter is the final pos (excluded)


// const randomNum = Math.trunc(Math.random() * 6);
// console.log(randomNum);

const arr = [];
for(let i = 0; i < 10; i++){
    arr.push(i);
}
// console.log(arr);
arr.unshift(15); // adds value at the start of the array
// console.log(arr);
arr.shift(); // removes the first value of the array. it doesn't take any parameter.

const newarr = arr.join(); // this create a string with the array elements separated by the string we pass in as a parameter, if we don't pass anything, by default, it's separated by ','.
// console.log(typeof newarr);

const copyarr1 = arr.slice(2, 4); // slice takes the indexes of the range of elements to be deleted. end index is not included. also, it doesn't change the original array, just returns the range of elements specified.
// copyarr1.slice(2,4);
// console.log(copyarr1);
// console.log(arr);

const copyarr2 = arr.splice(2, 3); // splice takes the starting index and no. of elements to be deleted, like here we start at index = 2 and delete 3 elements. it also changes the orginal array by removing the range of elements specified. it returns only the range of elements specified.
// console.log(copyarr2);

let myName = "nikhil";
let nameArr = (Array.from(myName));
// console.log(typeof myName);
// console.log(typeof nameArr);
// console.log(Array.isArray(myName)); // checks if the passed argument is an array or not
// console.log(Array.of(myName)); // o/p : ["nikhil"]
// console.log(Array.from(myName)); // o/p: ['n', 'i', 'k', 'h', 'i', 'l']


// non-singleton (object literal) object
let userDetails = {
    firstName : "Nikhil",
    secondName : "Anand",
    age : 25,
    address : "Main Road, Garhwa",
    salary : 48200
}
// console.log(userDetails.firstName);
// console.log(this.firstName);

// this adds goal function to the userDetails object

userDetails.goal = function(){
    console.log("to become a good software developer!");
    console.log(`${this.firstName} ${this.secondName} aims to become a good software developer!`);
}
// console.log(typeof userDetails.goal);
// const func1 = function(){
//     console.log(userDetails.firstName);
// }

// console.log(userDetails.goal); // gives just the reference of the func. o/p : [Function (anonymous)]
// console.log(userDetails.goal()); // this actually runs the function. o/p : to become a good software developer!

let obj1 = {1 : "nik", 2 : "anand"};
let obj2 = {3 : 25, 4 : "software developer"};
let obj3 = {5 : "main road, garhwa", 6 : "to become a good software developer!"};

// console.log(Object.assign(obj1, obj2, obj3)); // this create a shallow copy, i.e. it changes the first object defined (target object) and merges it with all other subsequent objects (child objects). it doesn't changes any of the child objects.
// console.log(Object.assign({}, obj1, obj2, obj3)); // putting {} is the correct way (also more readable), as all other objects will be merged and stored in that first object (target object)
let finalObj = Object.assign({}, obj1, obj2, obj3);
// console.log(finalObj);
// console.log(obj1);
// console.log(obj2);
// console.log(obj3);

let keyVals = Object.keys(userDetails); // gives all the keys of the passed object in an array -- o/p -- [key1, key2, key3, ...., key8]
let valVals = Object.values(userDetails); // gives all the values of the passed object in an array -- o/p -- [value1, value2, value3,....,value7]
// console.log(valVals);

let allEntries = Object.entries(userDetails); // puts all the key value pairs as an array into a array -- o/p -- [[key, value], [key, value],....,[key, value]]
// console.log(allEntries);
// console.log(typeof keyVals);

let arrType = [];
// console.log(typeof arrType); // data type of an array is object

let propFlag = userDetails.hasOwnProperty('fullName');
// console.log(propFlag); // returns true or false checking if the passed property (key) is present in the object or not

// * you can look for different methods of 'Object' either on the mdn doc or through the chrome inspect

// console.log(userDetails);

const {firstName : yourFirstName} = userDetails;   // assigning a different variable name to the key of object doesn't change it in the source object. we can still access that property with the same name as it was defined in the object.
// console.log('---116----' + userDetails.firstName);
// console.log(firstName); // this will though throw an error as it we have assigned firstName a different variable name and hence this is not defined now.
console.log(yourFirstName);

// normal mota - mota diff b/w json and object
// 1. keys in json are put in ""
// 2. objects needs to be stored in some variable
// common kya hai?
// integer values need not be put in "" in both json and object -- koi bdha common nhi hai, but observe kiye the to likh liye yhn pe
