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
globalscope();