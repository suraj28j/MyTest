let ary = new Array(0, 1, 2, 3, 4);
//ary.push(5)
//console.log(ary); // [ 0, 1, 2, 3, 4, 5 ]

ary.pop();
//console.log(ary); // [ 0, 1, 2, 3 ]

let ary1 = [0, 1, 2, 3, 4]
//console.log(ary1); // [0, 1, 2, 3, 4]



let arySlice = ary1.slice(1, 3) // Slice
//console.log("Array Slice => ",arySlice); // [1, 2]
//console.log("Orignal Array after slice => ",ary1); // [0, 1 ,2, 3, 4]

let arySplice = ary1.splice(1, 3) // Splice 
//console.log("Array Splice => ",arySplice); // [1, 2, 3]
//console.log("Orignal Array after splice => ",ary1); // [0, 4]


let ary2 = [11, 12, 15, 16];
ary2.splice(2, 0, 13, 14); // Splice
//console.log(ary2); // [11, 12, 13, 14, 15, 16]



let aisa = ["India", "Sri Lanka", "Nepal"];
let africa = ["Kenya", "Namibia", "Zimbabwe"];

//aisa.push(africa);
//console.log(aisa); // [ 'India', 'Sri Lanka', 'Nepal', [ 'Kenya', 'Namibia', 'Zimbabwe' ] ]

let asaf = aisa.concat(africa);
//console.log(asaf); // [ 'India', 'Sri Lanka', 'Nepal', 'Kenya', 'Namibia', 'Zimbabwe' ]

let asNaf = [...aisa, ...africa];
//console.log(asNaf);


let subAry = [1, 2, 3, [4, 5], 6, 7, [8, [9, 10]]];
let subAry_new = subAry.flat(Infinity);
console.log(subAry_new);

console.log(Array.isArray("Suraj"));
console.log(Array.from("Suraj"));

console.log(Array.from({ name: "Suraj" }));


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));


