// The 'forEach' Helper
// The 'map' Helper
// The 'filter' Helper
// The 'find' Helper
// The 'every' and 'some' Helper
// The 'reduce' Helper

// es6 ---

//# coding ninja
// 1. Make the code as short as possible. Show how smart you are.
// 2. 
// 3. For instance, take a look at this ternary operator '?':
i = i ? i < 0 ? Math.max(0, len + i) : i : 0;


you can use let to store numeric and strings
let message = 'hello';
message = 123456;

//you can use let to store boolean values and it can also works as a result of comparsions
let checked  = true;
let isGreater = 4 > 1;
//output: true


-- you can declare strings
- dbl 
- single
- backticks ;  eg: `hello ${message}`;


//We can also iterate over characters using for..of:

 for (let char of "Hello") {
    alert(char); // H,e,l,l,o (char becomes "H", then "e", then "l" etc)
  }


Strings are immutable
Strings can’t be changed in JavaScript. It is impossible to change a character.

Let’s try it to show that it doesn’t work:

 let str = 'Hi';

str[0] = 'h'; // error
alert( str[0] ); // doesn't work
The usual workaround is to create a whole new string and assign it to str instead of the old one.

For instance:

 let str = 'Hi';

str = 'h' + str[1];  // replace the string

alert( str ); // hi


let str = "abcda";
let target = "a";
let count = 0;
let pos = -1;
while ((pos = str.indexOf(target, pos + 1)) != -1) {
  count++;
  if(count == 2)
    console.log('char is', str[pos] );
}


//
let str = "abcda";
let target = "a";
let count = 0;
let pos = -1;
while ((pos = str.indexOf(target, pos + 1)) != -1) {
  count++;
  count>=2 ? console.log('found -- ', str[pos]) : count++;
}



So, the test if ( ~str.indexOf("...") ) is truthy that the result of indexOf is not -1. In other words, when there is a match.
People use it to shorten indexOf checks:
let str = "Widget";

if (~str.indexOf("Widget")) {
  alert( 'Found it!' ); // works
}


//Destructuring Arrays
var arr = [1, 2, 3, 4];
var a = arr[0];
var b = arr[1];
var c = arr[2];
var d = arr[3];
let [a, b, c, d] = [1, 2, 3, 4];

console.log(a); // 1
console.log(b); // 2
//Destructuring Objects
var luke = { occupation: 'jedi', father: 'anakin' };
var occupation = luke.occupation; // 'jedi'
var father = luke.father; // 'anakin'
let luke = { occupation: 'jedi', father: 'anakin' };
let {occupation, father} = luke;

console.log(occupation); // 'jedi'
console.log(father); // 'anakin'


// ternary operator

let result = condition ? value1 : value2;

The condition is evaluated: if it’s truthy then value1 is returned, otherwise – value2.
For example:

let accessAllowed = (age > 18) ? true : false;
or

accessAllowed = age > 18   // output is true or false because comparision operator returns the boolean



let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );