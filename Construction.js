// Construction Function //

const User = function (name, id, isLoggedIn) {
    this.name = name; // in coding practice function veriable and function parameters must be same
    this.id = id;
    this.isLoggedIn = isLoggedIn;
    return this
}

let user1 = new User("Suraj", 101, true); // 'new' keyword call a construction function
let user2 = new User("Mohit", 20, false); // user2 values over wright 'User' 
//console.log(user1);
console.log(user2);