function totalCartPrice(price1, price2, ...prices){
    /// ... --> this is called rest operator. it bundles multiple arguments passed to the func. also rest parameter needs to be the last parameter in the function.
    // console.log(prices);
}

totalCartPrice(100, 200, 500, 300, 600, 1050.50, "nikhil anand", true);


// passing objects as arguements

let myObj = {
    firstName : "Nikhil",
    lastName : "anand",
    age : 25,
    goal : "SDE"
};

function handleObject(obj){
    // console.log(obj);
    // return obj.goal;
}

// console.log(handleObject(myObj));

// passing arrays as arguements

let myArr = ["nikhil", "anand", 25, "SDE"];

function handleArr(arr){
    console.log(arr);
}

handleArr(myArr[3]);