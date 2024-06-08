// console.log("hey, fourth project!!");


// steps
// 1. ek random no. generate krenge. we have to match this with 10 different no.'s of the user i/p. 
// 2. user ka i/p ko ek array me store krenge and display it on the UI.


// khud se kr liye the, although took me more time than expected. also thoda random order me code kiye and not how in the order the game gets implemented.
// functions use kr skte the for every step (chai aur code me functions use kiya hai achhe se, dekh skta hai)
// khud se "start over" button ka idea nhi aaya
// input field disable krna ka bhi idea nhi aaya
// high or low wala cheez bhi nhi sujha khud se

const h1 = document.querySelector("h1");
// console.log(title.innerText);
const lastDiv = document.querySelector(".resultParas");
const btn = document.createElement("button");
btn.innerText = "Start Over!"
const userInput = document.querySelector("#guessField");
const lowOrHigh = document.querySelector(".lowOrHi");
const formElement = document.querySelector(".form");
// console.log(formElement);
let prevValArr = [];
const formLabel = document.querySelector("#guess");
// console.log(formLabel);
// formLabel.innerText = "Nikhil_Anand";
const guessRemain = document.querySelector(".lastResult")
// console.log(guessRemain);
// console.log(prevValArr);
let randNum = Math.trunc(((Math.random() * 100) + 1)), totalAttempts = 10;
console.log("randNum: " + randNum);
// console.log(typeof randNum);
function resetfunc(){
    prevValArr = [], totalAttempts = 10;
    randNum = Math.trunc(((Math.random() * 100) + 1));
    console.log("randNum: " + randNum);
    h1.textContent = "Number Guessing Game";
    h1.style.color = "white";
    guessRemain.textContent = totalAttempts;
    document.querySelector(".guesses").textContent = prevValArr;
    lowOrHigh.textContent = "";
    userInput.removeAttribute("Disabled", "");
    lastDiv.removeChild(btn);
}

// console.log(formElement);
// const userVal = document.querySelector("#guessField").value;
// console.log(typeof userVal);


formElement.addEventListener("submit", function(e){
    e.preventDefault();
    totalAttempts--;
    guessRemain.textContent = totalAttempts;
    
    // console.log(userInput.textContent); 
    const userVal = Number(userInput.value);
    userInput.value = " ";
    // console.log("userVal: " + userVal);
    if(userVal === 0 || userVal === " " || isNaN(userVal) || userVal < 1 || userVal > 100){
        alert("please guess a valid value between 1 and 100.")
        // console.log(userInput.textContent); 
    }
    prevValArr.push(userVal);
    if(userVal === randNum || totalAttempts === 0){
        if(userVal === randNum){
            // console.log("------49------" + h1.textContent);
            h1.textContent = "Congrats, you guessed the right number!!!"
            h1.style.color = "green";
            // console.log("----51-----" + h1.textContent);
        }
        else{
            h1.textContent = "You loose, please restart!!!"
            h1.style.color = "red";
            lowOrHigh.innerHTML = `<h2>random number was ${randNum}!</h2>`;
            lowOrHigh.style.color = "green";
        }
        userInput.setAttribute("Disabled", "");
        lastDiv.appendChild(btn);
        console.log(lastDiv);
        btn.addEventListener("click", function(e){
            console.log("----71------");
            setTimeout(resetfunc(), 2000);
        })
    }
    else{
        if(userVal > randNum){
            lowOrHigh.innerHTML = "<h2>Please guess a lower number!</h2>";
            lowOrHigh.style.color = "yellow";
        }
        else if(userVal < randNum){
            lowOrHigh.innerHTML = "<h2>Please guess a higher number!</h2>";
            lowOrHigh.style.color = "blue";
        }
    }
    document.querySelector(".guesses").textContent = prevValArr;
    // console.log(typeof prevValArr[prevValArr.length - 1]);
    // console.log(userInput.innerText);
    // console.log(userVal);
});