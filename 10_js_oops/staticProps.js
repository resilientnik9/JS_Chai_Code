// static keyword

class userDetail {
    constructor(userName, userEmail, userPhone){
        this.userName = userName;
        this.userEmail = userEmail;
        this.userPhone = userPhone;
    }
    
    getUserName(){
        return `UserName : ${this.userName}`;
    }
    // static restricts the instances of this this class and it's child class to access this function (we can also use static with variables)
    static getUserPhone(){
        return `UserPhone : ${this.userPhone}`;
    }
}

const createUser = new userDetail("nik", "nikfb@com", 8282722720);
console.log(createUser.getUserPhone());

