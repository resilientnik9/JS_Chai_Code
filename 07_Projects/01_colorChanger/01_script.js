// console.log("hey, it's your first project!!");

// console.log(document.querySelectorAll(".button"));


// efficient approach

const btnArr = document.querySelectorAll(".button");
// console.log(btnArr);
const bodyElement = document.querySelector(".setColor");
btnArr.forEach((val) => {
    // console.log(val.id);
    val.addEventListener("click", function(event){
        console.log(event);;
        // document.querySelector(".setColor").id = "grey";
        bodyElement.id = val.id;
    })
})


// naive approach

// const greyBtn = document.querySelector("#grey").addEventListener("click", function (event){
//     console.log(event);
//     document.querySelector(".setColor").id = "grey";
// });

// const whiteBtn = document.querySelector("#white").addEventListener("click", function (event){
//     console.log(event);
//     document.querySelector(".setColor").id = "white";
// });
// const blueBtn = document.querySelector("#blue").addEventListener("click", function (event){
//     console.log(event);
//     document.querySelector(".setColor").id = "blue";
// });
// const yellowBtn = document.querySelector("#yellow").addEventListener("click", function (event){
//     console.log(event);
//     document.querySelector(".setColor").id = "yellow";
// });
// const redBtn = document.querySelector("#red").addEventListener("click", function (event){
//     console.log(event);
//     document.querySelector(".setColor").id = "red";
// });
// const blackBtn = document.querySelector("#black").addEventListener("click", function (event){
//     console.log(event);
//     document.querySelector(".setColor").id = "black";
// });
// const greenBtn = document.querySelector("#green").addEventListener("click", function (event){
//     console.log(event);
//     document.querySelector(".setColor").id = "green";
// });

// console.log(btn);
// btn.forEach(function (val, index, arr){
//     console.log(val.id);
// })
