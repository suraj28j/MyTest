"use strict" // Treat all JS code as newer version

//alert( 3 + 3) // bcoz we are using node JS not Browser


// ---Primitive Data Type--- // // 
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


// // ---Non Primitive Data Type--- // //
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



// ---Data Type Conversion--- //

// type conversion is the process of converting data of one type to another. //
// (1) Implicit Conversion - automatic type conversion
// (2) Explicit Conversion - manual type conversion

// (1) Implicit Conversion Examples

// Example 1
let num1 = 3;
let num2 = "3";
console.log(num1 + num2); // 33

// Example 2
let num3 = 24;
let num4 = "Hello";
console.log(num1 + num2); // 24Hello

// Example 3
let num5 = 3;
let num6 = "3";
console.log(num5 - num6); // return 0  since num6 (string type) is converted to a number type

// Example 4
let num7 = 3;
let num8 = "Hello";
let numR = num7 - num8;
console.log(numR); // NaN 
console.log(typeof (numR)); // data type is a number

// Example 5
let num9 = 4 - true;
console.log(num9); // 3

let num10 = 4 + false;
console.log(num10);

let num11 = 4 + undefined;
console.log(num11);  // NaN

let num12 = 4 - undefined;
console.log(num12);  // NaN

let num13 = true + undefined;
console.log(num13);  // NaN

let num14 = null + undefined;
console.log(num14);  // NaN



// (2) Explicit Conversion Examples 

// Example (1)
let num15 = Number("123");
console.log(num15);
