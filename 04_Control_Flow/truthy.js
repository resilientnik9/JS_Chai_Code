
// falsy values

// false, 0, -0, 0n (BigInt), "", null, undefined, NaN (not a number)


//truthy values (waise to whatever is not a falsy value is a truthy value, but ye sb thoda unique hai isliye mention kiye hai)

// "0", 'false', " ", [], {}, function(){}

const obj1 = {};

if(Object.keys(obj1).length === 0){
    // console.log("obj1 is an empty object!");
}


// Nullish Coalescing Operator (??): null undefined

let val = 18;

val = null ?? 1; // basically the right part of ?? will be executed and suppose in actual prod environment, if it return null or undefined, then we put a null or undefined to the left of ?? to actually handle the condition of when we get a null or undefined

console.log(val);

val = 99 ?? 1; // simply ye bhi bol skte hai that it will store the first truthy value to "val" (ab ye practical use nhi hai coz we will always assign the 1st val if we put a truthy value as first value)

console.log(val);

val = 18 ?? 1 ?? 99;

console.log(val);

val = null ?? 1 ?? 99;

console.log(val);

val = null ?? null ?? 99;

console.log(val);


