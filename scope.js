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