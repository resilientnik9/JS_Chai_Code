// parseInt("123qwe")
// returns 123

// Number("123qwe")
// returns NaN

// In other words parseInt() parses up to the first non-digit and returns whatever it had parsed. Number() wants to convert the entire string into a number, which can also be a float BTW.

// imp pts. in below code :
// 1. ek to form element ke upar event krna hoga agr input form elements ke andr le rhe hai.
// 2. dusra, as soon as we enter in the callback function, we call the 'preventDefault()' method (isse idhr kya affect ho rha tha wo neeche dale hai, baki logically mdn docs pe dekh lena)
// 3. parseInt() -- ye method use kr rhe hai instead of Number()
// 4. toFixed() -- to get answer upto 2 decimal places

const formElement = document.querySelector("form");
// console.log(formElement);
formElement.addEventListener("submit", function (e){
    e.preventDefault(); // ye add nhi kr rhe the to as soon as I clicked on the 'calculate' (submit), it shows all the logs, and value on the UI, and immediately disappears (test krna ho to ek baar hta ke dekhna ki yhn pe kya impact ho rha hai iska)
    // console.log(e);
    // const userHeight = Number(document.querySelector("#height").value); isko nhi use krna ka logic upr diye hai
    const userHeight = parseInt(document.querySelector("#height").value).toFixed(2);
    // console.log(typeof userHeight, userHeight);
    // const userWeight = Number(document.querySelector("#weight").value);
    const userWeight = parseInt(document.querySelector("#weight").value).toFixed(2);
    // console.log(typeof userWeight, userWeight);
    const result = document.querySelector("#results");
    // console.log(isNaN(userHeight), isNaN(userWeight));
    if(userHeight === '' || userHeight < 0 || isNaN(userHeight)){
        result.innerText = `${userHeight} is not a valid height!`;
    } else if(userWeight === '' || userWeight < 0 || isNaN(userWeight)){
        result.innerText = `${userWeight} is not a valid weight!`;
    } else{
        const BMI = Number((userWeight / ((userHeight * userHeight) / 10000))).toFixed(2);
        console.log(userWeight, userHeight, BMI);
        console.log(typeof BMI);
        // result.innerText = `Your BMI is : ${BMI}`;
        if(BMI < 18.6){
            result.innerText = `Underweight : ${BMI}.`
        } else if(BMI >= 18.6 && BMI <= 24.9){
            result.innerText = `Normalrange : ${BMI}.`
        } else {
            result.innerText = `Overweight : ${BMI}.`
        }
    }
});

// commented code below don't work for below reasons
// 1. for a form element, we want to fetch the 'height' and 'weight' values when we submit the form, and not as soon as our page get's loaded and the whole script runs.
// 2. invidiually selection of elements on 'click' or 'change' event here doesn't work as the values will be rendered with page load (on click, the value is not reset or changed)

// // console.log("hey, welcome to your second project!!");

// const heightVal = document.getElementById("height");
// // console.log(heightVal);
// const weightVal = document.getElementById("weight");
// // console.log(weightVal);
// let userHeight, userWeight;
// heightVal.addEventListener("change", (e) => {
//     // console.log(e);
//     // console.log(e.target);
//     userHeight = e.target.value / 100.0;
//     console.log(typeof userHeight);
//     // console.log(userHeight);
// });
// weightVal.addEventListener("change", (e) => {
//     // console.log(e);
//     // console.log(e.target.value);
//     userWeight = Number(e.target.value);
//     console.log(typeof userWeight);
//     // console.log(userWeight);
// });
// // console.log(userHeight);
// // console.log(userWeight);
// // userHeight /= 100.0;
// // console.log(userHeight);
// // console.log(heightVal);
// const BMI = (userWeight / (userHeight * userHeight));
// // console.log(BMI);
// const result = document.getElementById("results");
// document.querySelector("form").addEventListener("submit", (e) => {
//     console.log(e);
//     // result.innerHTML = `<h1>${BMI}</h1>`;
// })
// // result.innerText = 
// // console.log(result);