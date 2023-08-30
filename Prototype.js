// prototype is JavaScript behaviour

function multiplyBy5(num) {
    return num * 5;
}

multiplyBy5.power = 2;

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype); // return {}
// emplty {} refer to this methode -by default contest set 

function createUser(username, score) {
    this.username = username;
    this.score = score;
}

// with the help of 'prototype' we can inject a methode (functionality) in our function 

createUser.prototype.increment = function () {
    this.score++;
}
createUser.prototype.printMe = function () {
    console.log(`price is ${this.score}`)
}

const tea = new createUser("tea", 20);
const coffee = new createUser("coffee", 50);

//console.log(createUser.prototype); // ...for checking the methode is inject or not

tea.printMe();

/* 

Here's what happens behind the scenes when the new keyword is used:

A new object is created : The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function.
this mean that it has access to properties and method defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object.
If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created obect, to be the intended return vale.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function etc.), 
the newly created object is returned.

*/


// some other uses of Prototype //

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function () {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.welcome = function () {
    console.log(`Welcome to the coding world`);
}
// the welcome methode can access both Array and Object 

myHeros.welcome();
heroPower.welcome();


Array.prototype.myArray = function () {
    console.log(`This is Array Prototype`);
}
// the myArray methode can access only Arrays

myHeros.myArray();
// heroPower.myArray(); // heroPower.myArray is not a function