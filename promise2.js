// ----Problem---- //
// console.log("Start");
// function getName(name){
//     setTimeout(()=>{
//         console.log("Inside SetTimeOut");
//         console.log(name);
//     },2000);
// }
// const nm = getName("Suraj");
// console.log(nm);
// console.log("End");


// ----Solution---- //
console.log("Start");
function getName(name ,cb){
    setTimeout(()=>{
        console.log("Inside SetTimeOut");
        cb(name);
    },2000);
}
getName("Suraj" ,(nm)=>{console.log(nm)});
console.log("End");