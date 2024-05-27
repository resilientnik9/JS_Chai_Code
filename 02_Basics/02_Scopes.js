var c = 2000;

if(true){
    let a = 18;
    const b = 1;
    var c = 1999;
}

// console.log(a); // o/p : error dega
// console.log(b); // o/p : error dega
// console.log(c); // o/p : 1999 -- due to this reason, we now don't use var

// different types of function declarations

// myFunc1(17);

// these type of declared (defined) function can be called from anywhere in the code
function myFunc1(x){
    // console.log(x + 1);
    return;
}

// myFunc1(17); 


// myFunc2(0);

// this func can't be accessed or called before it's intialization. we can put anything, either 'let', 'var' or 'const'. usually we put 'const'.
const myFunc2 = function (x){
    console.log(x + 1);
}

myFunc2(0);