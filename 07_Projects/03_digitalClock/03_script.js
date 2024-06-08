// console.log("hey, welcome to your 3rd Project!!!!!");

const clock = document.querySelector("#clock");

// clock.innerText = "Nikhil_Anand";

// console.log(clock);

// const currTime = new Date().toLocaleTimeString();
// console.log(currTime.toLocaleTimeString());
// console.log(currTime);

setInterval(function displayTime(){
    clock.innerText = new Date().toLocaleTimeString();
}, 1000);

// function displayTime(){
//     clock.innerText = new Date().toLocaleTimeString();
// }

// setInterval(displayTime, 1000); // displays running time (1 ms ka interval set kiye hai to run the function passed as the 1st parameter)