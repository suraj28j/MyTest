// two type of declaration
// (1) Constructor // (2) Literal

// (1) Constructor // Singleton //
// Object.create()
// const user = new Object() 

// (2) Object Literal
const mySym = Symbol("key1");

const user = {
    name: "Suraj", // key assume as a string - "name"
    "full name": "Suraj Kumar",
    //mySym:"mykey1", // value is same but dataType is a string
    [mySym]: "mykey1",
    age: 33,
    city: "Banglore",
    emailId: "suraj28j@gamil.com",
    isLoggedIn: false,
    lastLogInDays: ["Monday", "Tuesday", "Wednesday"]
}

// there are two type to access the object
console.log(user.name);
console.log(user["name"]);

console.log(user["full name"]);

// we can change the value 
user.name = "Anand";
//console.log(user);

//Object.freeze(user); // we can not change the value

user.welcome = function () {
    console.log("welcome JS User");
}

console.log(user.welcome); // pass the function referance not excute
console.log(user.welcome()); // function excute
user.welcome();

User.welcome2 = function(){
    console.log("Welcome JS User "+this.name); // this referance to that Object 
}

// Object Merge or assign

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }
//const obj3 = Object.assign(obj1, obj2);
//const obj3 = Object.assign({}, obj1, obj2); //Object.assign(target, sources)
const obj3 = { ...obj1, ...obj2 };

console.log(obj3);


// Some other Object Properties //
const newUser = {
    name: "Satish",
    age: 30,
    city: "Varanasi",
    id: "sat94@gmail.com"
}

console.log(Object.keys(newUser)); // return value in arryay data type
console.log(Object.values(newUser)); // return array data type
//console.log(Object.entries(newUser));
console.log(newUser.hasOwnProperty("city"));



// Object de-structure //

const student = {
    name: "Rakesh",
    age: 33,
    qualification: "Diploma",
    workingExperince: "2 Years"
}

// const {workingExperince}=student;
// console.log(workingExperince);

const { workingExperince: exp } = student;
console.log(exp);



// Object Descripter //

console.log(Math.PI);
Math.PI = 5; // try to change the value 
console.log(Math.PI);

const mathDescripter = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(mathDescripter);
/*
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}   
*/

const mobile = {
    model_No: "SM-Galaxy_M14",
    price: 14000,
    isAvailable: true
}

const mobileDes = Object.getOwnPropertyDescriptor(mobile, "model_No")
console.log(mobileDes);
/*
{
  value: 'SM-Galaxy_M14',
  writable: true,
  enumerable: true,
  configurable: true
}
*/
Object.defineProperty(mobile, "model_No", {
    writable: false,
    enumerable: false,
})
const mobileDesChange = Object.getOwnPropertyDescriptor(mobile, "model_No")
console.log(mobileDesChange);