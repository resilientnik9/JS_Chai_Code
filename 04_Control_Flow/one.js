// if else statements

// incorrect to use == here as it just checks the value and not the data type, js converts both lhs and rhs to same data type and then checks the codn and hence return true and executes the code inside the if block
if(2 == "2"){
    console.log("executed"); // this shouldn't have been executed as 2 is not equal to "2"
}

if(2 === "2"){
    console.log("executed"); // this will not be executed (which is correct) since we are doing a strict check "===" which also checks the data type
}

// baki aur kch khas nhi hai if blocks me dekhne ke liye

if(2 === 2) console.log("executed"); // this will be executed, we can keep single line of code without the braces and it will get executed
