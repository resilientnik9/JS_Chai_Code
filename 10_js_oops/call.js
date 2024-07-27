// console.log("hey nik!!");

function setUserName(userName){
    this.userName = userName;
    // console.log(setUserName);
    // console.log("here");
    // console.log(userName);
}

function createUser(name, email, phone){
    // setUserName(name); // although the function would be called, but we won't get any reference to the "username" defined in that function.
    // to get the reference of that username and add it to this func object, we will use "call()"
    setUserName.call(this, name);
    this.email = email;
    this.phone = phone;
    // this.__proto__ = setUserName;
}

// createUser("nikhil", "nik@fb.com", "288282828");
// console.log(createUser);

const newUser = new createUser("nikhil", "nik@fb.com", "288282828");
console.log(newUser);

// const newUserName = new setUserName();