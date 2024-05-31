let month = 2;

// we can have any data type in the switch condition

switch (month) {
    case 1:
        console.log("January!");
        break;
    case 2:
        console.log("February!");
        // break; // not putting a break statement, we will execute all the code from here till the point we encounter a break
    case 3:
        console.log("March!");
        // break;
    case 4:
        console.log("April!");
        // break;
    case 5:
        console.log("May!");
        // break;
    default:
        console.log("After May Month!");
        break;
}