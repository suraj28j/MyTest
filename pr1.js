// call() , apply() and blind() //
let obj1 = {
    fname: "Suraj",
    lname: "Kumar",
    age: 32,
    fullname: function () {
        console.log(this.fname + " " + this.lname);
    }
}
let obj2 = {
    fname: "Prakash",
    lname: "Kumar",
    age: 29
}
// function borrowing
//obj1.fullname.call(obj2);
function fulldeails() {
    //console.log("Name"+":"+this.fname+" "+this.lname+" "+"Age"+":"+this.age);
    console.log(`Name : ${this.fname} ${this.lname} Age : ${this.age}`);
}

//fulldeails.call(obj1);
function userdetails(city, state) {
    console.log(`Hello My self ${this.fname} ${this.lname} and I live in ${city} (${state})`);
}
userdetails.call(obj1, "Renukoot", "Uttar_Pradesh"); // call()
userdetails.apply(obj2, ["Bangalore", "Karnatka"]); //apply()
// blind 
let userfun = userdetails.bind(obj1, "Praygraj", "Uttar_Pradesh");
userfun();



// Regular Expression // 
let pattern = /raj/i;
let string = "Suraj";
console.log(pattern.exec(string));

let pattern2 = /[a-z][0-9]/g;
let string2 = "s2810j";
console.log(pattern2.test(string2));



// Currying //

// Closures
function add(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}
// let data1=add(2);
// let data2=data1(3);
// let data3=data2(4);
let data = add(2)(3)(4);  // value of a retain it call lexical scope 
console.log(data); // Currying

let userObj = {
    name: "Suraj",
    age: 33
}

function userinfo(obj) {
    return function (info) {
        return obj[info];
    }
}
let res = userinfo(userObj);
console.log(res('name'));



// Callback Function //
function username() {
    console.log("Suraj");
}
function fun(callback) {
    callback();
}
fun(username);

// Callback Function //
function intro(age) {
    console.log("My name is Suraj & I'm " + age + " years old");
}
function userinfo(a, cb) {
    cb(a);
}
userinfo(33, intro);



// Memoization //
let sum = 0;
function cal(n) {
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}
const memoize = (fun) => {
    let cache = {};
    return function (...arg) {
        let n = arg[0];
        if (n in cache) {
            console.log("cache");
            return cache[n];
        } else {
            console.log("calculating first time");
            let result = fun(n);
            cache[n] = result;
            return result;
        }
    }
}
console.time();
const eff = memoize(cal);
console.log(eff(5));
console.timeEnd();



// Constructor //
function Cons(name, city,) {
    this.name = name;
    this.city = city;
}
let user = new Cons("Suraj", "Renukoot");
console.log(user);


// Prototype //
function mobile(model_no, Price) {
    // Instant Member
    this.model = model_no;
    this.price = Price;
};
let samsung = new mobile("Galaxy", 15000);
let nokia = new mobile(3310, 10000)

// Prototype Member
// samsung.color="white";
// nokia.color="white";
// classname.prototype.key="value";
mobile.prototype.color = "white";

console.log(samsung);
console.log(nokia);


// Class //

class student {
    constructor(name, age) {
        this.studentname = name;
        this.studentage = age;
    }
    details() {
        console.log(`Student name is ${this.studentname} and its age is ${this.studentage}`);
    }
    static st() {
        console.log("This is static methods");
    }
}
let rollNo1 = new student("Suraj", 33);
rollNo1.details();
student.st();



// Promise //

let prom=new Promise(function(res,rej){
    if(1){
        res("Successful");
    }else{
        rej("Failed");
    }
})
let onfullfilment=(result)=>{
    console.log(result);
}
let onreject=(error)=>{
    console.log(error);
}
prom.then(onfullfilment);
prom.catch(onreject);



// Generator Function //

function *fun(){
    console.log("First Message");
    yield 'Yied No 1';
    console.log("Second Message");
    yield 'Yied No 2';
    console.log("Third MEssage");
    yield 'Yied No 3';
}
let gen=fun();
console.log(gen.next());