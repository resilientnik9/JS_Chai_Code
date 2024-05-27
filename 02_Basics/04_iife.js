// iffe --> immediately invoked function expression

// these are executed as soon as we run (used when we need to connect to a database as soon as we run or launch)

// named iife
// (function chai(){
//     // console.log(`learning iffe on chai aur code!`);
// })();

// to execute multiple iife, we need to put ';' after every iife
// we need to wrap the function definiton inside '()' to run it
// this is defining the function
// (function chai(){
//     console.log(`learning iffe on chai aur code!`);
// })

// putting it just after the function definition, it's same as chai(), we just use the paranthesis to call the func
// ()

// unnamed iife
// (function(){
//     // console.log(`learning iffe on chai aur code!`);
// })();

// arrow function iife

// (() => {
//     console.log(`learning iffe on chai aur code!`);
// })();

// (() => (console.log(`learning iffe on chai aur code!`)))();

// (() => console.log(`learning iffe on chai aur code!`))();