const user = {
    fullname : "nikhil anand",
    age : 25,
    welcomeMessage : function(){
        // console.log(`Hey ${this.fullname}, welcome to Chai aur Code!`); // here can use both user.fullname or this.fullname, both gives same o/p.
        // console.log(this); // o/p : prints complete 'user' object
    }
}

user.welcomeMessage();

// console.log(this);

// arrow functions

// basic standard syntax of an arrow function
// const func1 = () => {
//     console.log(`You called an arrow function!`);
// }

// func1();

// bit modified where we don't need 'return' keyword if we have only 1 line of code to execute inside the function

// const func2 = () => console.log(`You are returning this from arrow function without the "return" keyword!`);

// func2();

// bit more modified where we wrap the 1 line of code to be returned inside paraenthesis. here also we don't need the 'return' keyword

// const func3 = () => (console.log(`You are returning this from arrow function wrapping the 1 line of return statement in parenthesis!`));

// func3();