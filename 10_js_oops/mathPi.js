// console.log(Math.PI);
// Math.PI = 18;
// console.log(Math.PI);

// console.log(Object.getOwnPropertyDescriptor(Math, "PI")); // to access specific property description of an object

// console.log(Object.getOwnPropertyDescriptors(Math)); // to access all the properties description of an object

Math.PI = 18;  // this won't change the PI value to 18
console.log(Math.PI); 
const desc = Object.getOwnPropertyDescriptor(Math, "PI");
desc.value = 18;
// console.log(desc.value); // since we have stored the value in a variable, hence we can change, but we can't directly change it on the "Math" Object
// we can't change the description properties of any standard object

// we can change the description properties on our own custom object
