// reduce method on arrays

const myArr = [];

const finalVal = myArr.reduce(function (accumulator, currVal, currValIndex, completeArr){
    // console.log(`acc val is : ${accumulator}, and curr val is : ${currVal}, curr val Index is : ${currValIndex}.`);
    // console.log(completeArr);
    return accumulator + currVal;
}, 18);
// 3 -> intital value which the accumulator holds if specified. agr initial value specify nhi krenge then accumulator will take the 1st value (0th index) as the intital value
// and start the iteration from the 1st index.

// if we have a single element in our array and we don't provide the intial value, then our call back func won't be called.
// if we have an empty array and a intial value then also our call back function won't be called.
// to call the callback func, we need to have at least 2 values either only in array, or 1 in array and 1 intial value.

console.log(finalVal);