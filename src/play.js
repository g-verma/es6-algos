// outer: for (let i = 0; i < 3; i++) {

//   for (let j = 0; j < 3; j++) {

//     let input = prompt(`Value at coords (${i},${j})`, '');

//     // if an empty string or canceled, then break out of both loops
//     if (!input) break outer; // (*)

//     // do something with the value...
//   }
// }
// console.log('Done!');


// const obj = {  
//   a: 1,
//   b: 2,
//   c: 3,
//   d: 4
// }

// for (let elem in obj) {  
//   console.log( obj[elem] )
// }

// for (let elem in obj) {
//   console.log(`${elem} = ${obj[elem]}`);
// }
// // a = 1
// // b = 2
// // c = 3
// // d = 4

// const string = 'hello';
// for (let character in string) {  
//     console.log(string[character])
// }
// // h
// // e
// // l
// // l
// // o


// object pattern matching
let {lName, fName} = {fName: 'John', age: 15, lName: 'Doe'};

// array pattern matching
let [first, second, third] = [8, 4, 100, -5, 20];

// output: Doe, John
console.log(lName + ', '+ fName);

// output: 100, 4, 8
console.log(third, second, first);