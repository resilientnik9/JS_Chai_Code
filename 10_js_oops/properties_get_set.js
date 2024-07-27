// this is somewhat old way of defining get and set for properties (when we didn't had class in javascript)

// always yaad rkha, function is also a type of object
function myFunc(name, email){
    this._name = name;
    this._email = email;

    Object.defineProperty(this, "email", {
        get : function(){
            return this._email.toUpperCase();
        },
        set : function(val){
            this._email = val;
        }
    });
}

const obj = new myFunc("nik", "nik@google.com");
// console.log(obj, obj.email, obj._email); // o/p : myFunc { _name: 'nik', _email: 'nik@google.com' } NIK@GOOGLE.COM nik@google.com