// last repeating char
const __lastrep = str =>{
	var obj = {}

  for(var i=str.length-1; i>=0;i--){
      if(obj[str[i]]){
        obj[str[i]]++;
        if(obj[str[i]] > 1){      
            return str[i];
          }
      }else{
        obj[str[i]] = 1;
      }
    }
}

var k = 'abab';
console.log('last repeated: ', __lastrep(k));



//first non - repeating
const __nonrep = str => {
  let char = [];

  for (let k of str) {
      (char[k]) ? char[k]++ : char[k] = 1;
  }
  
  for (let i of str) {
      if (char[i] === 1) {  
          return i;  // returning char whose char count is 1 for non repeating char
      }
  }
}
var inputString = "abcab";
console.log("First Non-Repeating char is: ", __nonrep(inputString));




//run length / compression / encoding
const __runLength = str => {
var obj={};
for(let i of str){
  obj[i] ? obj[i] = obj[i]+1 : obj[i] = 1;
}

let kk = ''; 
for(let k in obj){
    kk += (k+obj[k]);
}
return kk;
}

let s ='abcab';
console.log(__runLength(s))



function softvisionAlgo(input) {
    let firstRepeating = '',
        lastRepeating = '',
        firstNonRepeating = '',
        lastNonRepeating = '',
        mostRepeated = '';
  
    let inputArr = input.split('');
  
   // array count  
    let arr = [];
    for(let x of input){
      let count = 0;
  
      for(let y of input ){
        y === x ? count++ : count;
      }
      arr.push(count);
    }
    console.log('new arr ', arr);
  
  
    /*
    ** Following line will fetch the first and last repeated item out of input array.
    */
  // first repeating
    for(let k in arr){
      if(arr[k] == 2){
       console.log('frst rep is ',input[k]);
       break;
      }
    }
  
  //first non repeating
    for(let g in arr){
      if(arr[g] == 1){
        console.log('nnnrep ',input[g]);
      }
    }
    
    let iteration = true;
    arr.forEach((val, idx) => {
        if(val > 1 && iteration) {
            firstRepeating = inputArr[idx];
            iteration = false;
        } else if(val > 1 && firstRepeating !== inputArr[idx]) {
            lastRepeating = inputArr[idx];
        }
       
    });
  
    /*
    ** Following line will fetch the first and last non repeated item out of input array.
    */
    let iteration2 = true;
    arr.forEach((val, idx) => {
        if(val === 1 && iteration2) {
            firstNonRepeating = inputArr[idx];
            iteration2 = false;
        } else if(val === 1 && firstNonRepeating !== inputArr[idx]) {
            lastNonRepeating = inputArr[idx];
        }
    });
  
    /*
    ** Following line will fetch the most repeated item out of input array.
    */
    mostRepeated = inputArr[arr.indexOf(Math.max(...arr))];
  
  
    console.log('First Repeating Character : ', firstRepeating);
    console.log('Last Repeating Character : ', lastRepeating);
    console.log('First Non Repeating Character : ', firstNonRepeating);
    console.log('Last Non Repeating Character : ', lastNonRepeating);
    console.log('Most Repeated Character : ', mostRepeated);
  }
  
  
  let k = 'abca'
  softvisionAlgo(k)
  
  







/*
** Following program will accept the input string as a parameter and returns the following values.
** 1. First Repeated Number
** 2. Last Repeated Number
** 3. First Non Repeating Number
** 4. Last Non Repeating Number
** 5. Most Repeated Number
*/
function softvisionAlgo(input) {
    let firstRepeating = '',
        lastRepeating = '',
        firstNonRepeating = '',
        lastNonRepeating = '',
        mostRepeated = '';
  
    let inputArr = input.split('');
    let arr = [];
    for(let i = 0; i < inputArr.length; i++) {
        let count = 0;
        for(let j = 0; j < inputArr.length; j++) {
            if(inputArr[j] === inputArr[i]) {
                count++;
            }
        }
        arr.push(count);
    }
    console.log(arr);
    /*
    ** Following line will fetch the first and last repeated item out of input array.
    */
    let iteration = true;
    arr.forEach((val, idx) => {
        if(val > 1 && iteration) {
            firstRepeating = inputArr[idx];
            iteration = false;
        } else if(val > 1 && firstRepeating !== inputArr[idx]) {
            lastRepeating = inputArr[idx];
        }
  
    });
  
    /*
    ** Following line will fetch the first and last non repeated item out of input array.
    */
    let iteration2 = true;
    arr.forEach((val, idx) => {
        if(val === 1 && iteration2) {
            firstNonRepeating = inputArr[idx];
            iteration2 = false;
        } else if(val === 1 && firstNonRepeating !== inputArr[idx]) {
            lastNonRepeating = inputArr[idx];
        }
    });
  
    /*
    ** Following line will fetch the most repeated item out of input array.
    */
    mostRepeated = inputArr[arr.indexOf(Math.max(...arr))];
  
  
    console.log('First Repeating Character : ', firstRepeating);
    console.log('Last Repeating Character : ', lastRepeating);
    console.log('First Non Repeating Character : ', firstNonRepeating);
    console.log('Last Non Repeating Character : ', lastNonRepeating);
    console.log('Most Repeated Character : ', mostRepeated);
  }
  
  
  let k = 'abcabd'
  softvisionAlgo(k);
