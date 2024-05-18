const accountId = 180199;
let accountName = "Nikhil Anand";
var accountState = "Jharkhand";

accountCity = "Garhwa";

// accountId = 30199; // we can't change a const variable
console.log(accountId);

console.table([accountId, accountName, accountState, accountCity]);

// diff b/w let and var
// 'var' doesn't understand block scope, i.e. we can redeclare any global variable inside any block, and if we change it's value inside the block, it will also change the globally declared variable value. this has been overcome with 'let'.