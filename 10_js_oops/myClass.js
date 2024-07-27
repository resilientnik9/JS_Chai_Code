// console.log("hey nik!!");

// class in JS

class userDetail {
    // this.userName = userName;
    constructor(userName, userEmail, userPhone){
        this.userName = userName;
        this.userEmail = userEmail;
        this.userPhone = userPhone;
    }

    getUserName(){
        return this.userName;
    }

    getUserPhone(){
        return this.userPhone;
    }
}


class Teacher extends userDetail {
    constructor(age, job, address){
        super("anand", "nik@google.com", "9282828839");
        this.age = age;
        this.job = job;
        this.address = address;
    }
}
// const createUser = new userDetail("nikhil", "nik@google.com", "9282828839");
const addDetails = new Teacher(25, "software developer", "garhwa");
console.log(addDetails);
// console.log(createUser);
// const createUser = new userDetail("nikhil", "nik@google.com", "9282828839");
// const createUser = new userDetail("nikhil", "nik@google.com", "9282828839");
// console.log(createUser.getUserName());
// console.log(createUser.getUserPhone());

// behind the scene of the code (old way of writing the above code)

// 1. we define our function
// function userDetail(userName, userEmail, userPhone){
//     this.userName = userName;
//     this.userEmail = userEmail;
//     this.userPhone = userPhone;
// }

// const createUser = new userDetail("nikhil", "anand@google.com", 7262626901);

// 2. we basically add getUserName function to userDetail object (func)
// userDetail.prototype.getUserName = function () {
//     console.log(`userName : ${this.userName}`);
// }

// 2. we basically add getUserPhone function to userDetail object (func)
// userDetail.prototype.getUserPhone = function () {
//     console.log(`userPhone : ${this.userPhone}`);
// }

// 3. we create an instance (copy) of the userDetail object
// const createUser = new userDetail("nikhil", "anand@google.com", 7262626901);

// 4. finally we access the properties of the userDetail object
// createUser.getUserName();
// createUser.getUserPhone();
// console.log(createUser.userName);
// console.log(userDetail); // [Function : userDetail]
// console.log(userDetail.userName); // o/p : undefined

