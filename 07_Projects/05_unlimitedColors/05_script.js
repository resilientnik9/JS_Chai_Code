let uniqueId;
const genRandCol = function(){
    const colRange = "0123456789abcdef";
    let ranCol = "#";
    for(let i = 0; i < 6; i++){
        ranCol += colRange[Math.floor(Math.random() * 16)];
    }
    console.log(ranCol);
    return ranCol;
}
document.querySelector("#start").addEventListener("click", function(){
    console.log("nik");
    uniqueId = setInterval(function(){
        document.querySelector("body").style.backgroundColor = genRandCol();
        // https://stackoverflow.com/questions/70146994/how-to-change-in-javascript-background-color-from-css
        // document.querySelector("body").style.backgroundColor = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
        // console.log('#'+(Math.random() * 0xFFFFFF << 0));
        console.log(genRandCol());
    }, 1000);
    // console.log(uniqueId);
});
document.querySelector("#stop").addEventListener("click", function(){
    clearInterval(uniqueId);
    uniqueId = null;
});
// console.log(uniqueId);
// clearInterval(startChangeColor);