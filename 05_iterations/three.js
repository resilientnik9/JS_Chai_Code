// filter on arrays

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   console.log(books);

// filter can return. it always returns each element of the array based on the condition. agr array has object as each element, then also, based on any condn, it will always return the complete curr object it is processing.
// filter only returns those elements for which the condition is true, agr suppose we only return "element", so "element" will act as a truthy or falsy value based on it's value and it will only return for the truthy value

// console.log(books.filter(function (element) {
    // console.log(element);
    // return ((element.genre === "Non-Fiction" && element.publish >= 1990) ? element.edition : element.title);
    // return element.edition;
// }));


// map on arrays. this also returns values of the array, but unlike filter it doesn't return value based on the condition, it can return all the values of the array and we can also perfrom diff operations on each element and the result of that operation on each element will be returned.

// filter me we only can only return the original element of the array

const myArr = [1, 2, 3, 4, 5];

let filterArr = myArr.filter(function (element) {
    // return Math.sqrt(element); // this returns all the original elements (treating every sqrt val as a truthy value it returns the original elements)
    return element >= 3;
});

let mapArr = myArr.map(function (element) {
    return Math.sqrt(element); // this returns the sqrt of all the orignial elements (actually returns the new elements)
});

console.log("filterArr : " + filterArr);
console.log("mapArr : " + mapArr);
console.log("myArr : " + myArr);