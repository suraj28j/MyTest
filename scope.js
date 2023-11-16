/*
                    const   |   let   |   var
------------------------------------------------
global scope    |    No     |    No   |   Yes
------------------------------------------------
function scope  |    Yes    |   Yes   |   Yes 
------------------------------------------------
block scope     |    Yes    |   Yes   |   No
------------------------------------------------
reassigned      |     No    |   Yes   |   Yes

*/


var v1 = 23;
let l1 = 28;
const c1 = 11;

function globalscope(){
    console.log(v1);
    console.log(l1);
    console.log(c1);
}
globalscope();  // All variables can be accessed anywhere since they are declared in the global scope




// Function Scope //

function funscope(){
    var v2 = 30;
    let l2 = 40;
    const c2 = 50;
}
console.log(v2);  // Throws an error
console.log(l2);  // Throws an error
console.log(c2);  // Throws an error




// Block Scope //

{
    var v3 = 100;
    let l3 = 110;
    const c3 = 120;
}

console.log(v3); // Output is 100
console.log(l3); // Throws an error
console.log(c3); // Throws an error










// Hoisting //

// Hoisting is the default behaviour of javascript where all the variable and function declarations are moved on top //

// Example 1

num1 = 28; 
console.log(num1);// outputs 28 even when the variable is declared after it is initialized	
var num1;



// Example 2
welcome();

function welcome(){
    console.log("Hosting is JavaScript");
}



// Temporal Dead Zone //

// Temporal Dead Zone is a behaviour that occurs with variables declared using let and const keywords. 
// It is a behaviour where we try to access a variable before it is initialized. Examples of temporal dead zone 

// Example 

num2 = 29; // Cannot access 'num2' before initialization
console.log(num2);	
let num2; 
// same as const 