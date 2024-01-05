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

//----Solution---- // .....with  callback funtion (construction function)
// console.log("Start");
// function getName(name ,cb){
//     setTimeout(()=>{
//         console.log("Inside SetTimeOut");
//         cb(name);
//     },2000);
// }
// getName("Suraj" ,(nm)=>{console.log(nm)});
// console.log("End");




// console.log("Start");
// function getName(name, cb) {
//     setTimeout(() => {
//         console.log("Inside Name SetTimeOut");
//         cb(name);
//     }, 2000);
// }
// function getHobbies(name, cb) {
//     setTimeout(() => {
//         console.log("Inside Hobbies SetTimeOut");
//         cb(["Cricket", "Hockey", "Football"]);
//     },1000)
// }
// getName("Suraj", (nm) => { console.log(nm), getHobbies(nm, (hobby) => { console.log(hobby) }) });
// console.log("End");




// with Promise //
// let prom = new Promise((res,rej)=>{
//     let x=true;
//     if(!x){
//         res("Solved");
//     }else{
//         rej("Reject");
//     }
// }).then((value)=>{
//     console.log(value);
// }).catch((value)=>{
//     console.log(value);
// }).finally(()=>{
//     console.log("Cleaned");
// })




// another way to promise produce//
function getName(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Inside Name SetTimeOut");
            resolve(name);
        }, 2000);
    })
}

function getHobbies(name) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Inside Hobbies SetTimeOut");
            resolve(["Cricket", "Hockey", "Football"]);
        },1000)
    }) 
}

// promise consume //
// getName("Suraj")
// .then((nm)=>getHobbies(nm))
// .then((hobby)=>console.log(hobby))


// another way to consume promise //
// async function showHobbies(){
//     let nm = await getName("Suraj")
//     let hobby = await getHobbies(nm);
//     console.log(hobby);
// }


// (async and awit) consume promise with error handling //
async function showHobbies(){
    try{
        let nm = await getName("Suraj")
    let hobby = await getHobbies(nm);
    console.log(hobby);
    }catch{
        console.log("Something wrong");
    }
    
}

 showHobbies();