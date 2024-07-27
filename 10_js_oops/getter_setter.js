// console.log("learn getter setter!!");

class myClass {
    constructor(name, email, password){
        this.name = name;
        this.email = email,
        this.password = password;
    }

    // we have to use the actual property name with 'get' and 'set'. get excepts exactly 0 parameters, set excepts exactly 1 parameter
    // we can't set the value of the property in both the "constructor" and the "set"
    // to set it inside the "set", we have to use a different name for the property
    // Interesting thing observed : if we just console log the object, it will still hold the original value we passed to the parameter property. if we specifically console log "password" property, we will get it in upper case through the get func
    // also, when we console log obj.password -> o/p : 'ABC', but when we console log obj.__password -> o/p : 'abc'
    // this is coz, we actually changed the key of the object to __password, hence when we access "password", we access the get func which returns in uppercase, but when we acess __password, we actually access the property in the constructor object which is still set to it's original value of 'abc'
    get password(){
        return this.__password.toUpperCase(); // this changed the actual name of the property from "password" to "_password"
    }

    set password(value){
        this.__password = value;   // this changed the actual name of the property from "password" to "_password"
    }
}

const obj = new myClass("nik", "nik@google.com", "abc");
// console.log(obj.password);
console.log(obj);