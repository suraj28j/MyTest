class user {
    constructor(username, emailId, password) {
        this.username = username,
            this.emailId = emailId,
            this.password = password
    }
    encrptPassword() {
        return (`${this.password}abc`)
    }
    changeUserName() {
        return `${this.username.toUpperCase()}`
    }
}

const emp1 = new user("Sanjay", "sanjay1995@gmail.com", 123);
console.log(emp1.encrptPassword());
console.log(emp1.changeUserName());


// behind the scene

const userNew = function(username,emailId,password){
    this.username = username,
    this.emailId = emailId,
    this.password = password
}

userNew.prototype.encrptPasswordNew = function(){
    return `${this.password}abc`
}

userNew.prototype.changeUserNameNew = function(){
    return `${this.username.toUpperCase()}`
}

const emp2 = new userNew("Himanshu","hima@1995gmail.com",321);

console.log(emp2.encrptPasswordNew());
console.log(emp2.changeUserNameNew());
