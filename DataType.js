"use strict" // Treat all JS code as newer version

//alert( 3 + 3) // bcoz we are using node JS not Browser


// Primitive Data Type // 
let name = "suraj"
let lname = 'kumar'
let age = 33  // 2 to power of 53
let marks = 70.9
let bigInteger = 198907281992122320130711
let isLoggedIn = true
let job // Undefine 
let salary = null // Null - it represents a non-existent or a invalid value 
let mySymbol = Symbol('M14');
//typeof
console.log(typeof (job)); //  undefine
console.log(typeof (salary)); // object 
console.log(typeof (symbol1)); //  symbol

//Note - Primitive data types can store only a single value. To store multiple and complex values, non-primitive data types are used//


// Non Primitive Data Type //
// (1) Object
// (2) Array

// Object - Collection of data in key-value pairs

let Roll_No1 = {
    name: "Mohit",
    age: 30,
    isPassed: true,
    marks: {
        Science: 66,
        Mathematics: 74,
        English: 57,
    },
    skill: function () {

        console.log(this.name + " has good communication skill");
    }
}

// Array - Collection of data as an ordered list

let Roll_No2 = ["Ravi", 29, true, 76];

