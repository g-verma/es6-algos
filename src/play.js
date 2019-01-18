const __play = arr =>{
  var result = [];
  var obj = {};

  for(let item of arr){
    result.push(item);
  }

  for(let x in arr){
    console.log(x);
  }

  result[2] = 400;
  result.pop(2);
  return result;
}

var k = [10,20,30,40,50];
console.log(__play(k));



// const rr = arr =>{
//   let str = arr.split('');
//   let outarr = [];
//   var obj = {};
  
//   for(var i=0; i <str.length; i++){
//     let count = 0;
//     for(var j=0; j <str.length; j++){
//       if(str[j] == str[i])
//         count ++;
//     }
//     outarr.push(count);  
//   }
//   let remdup = outarr.filter((v,i)=>{ return outarr.indexOf(v) === i})
//   console.log(remdup);
//   return outarr;
// }

// var k = 'abcabcd'
// console.log('string entered is: ', rr(k));

// //   dup
// var kk = [1, 2, 3];
// var sum = kk.reduce((a, b) => a + b);
// console.log(sum);











// duplicates in string
const __repk = str => {
  var len = str.length;
  
  var result = [];
  var obj = {};

  for (var i=0; i<len; i++){
    var countr = str[i];
      
      obj[countr] = obj[countr] >=1 ? obj[countr] + 1 : 1;
      

      if (obj[countr] === 2){
          result.push(countr);
      }

      var ln = result.length;
  }
  
  return result[0]
}
var inputStr = "abca";
console.log('first repeated is', __repk(inputStr));





// function softvisionAlgo(input) {
//   let firstRepeating = '',
//       lastRepeating = '',
//       firstNonRepeating = '',
//       lastNonRepeating = '',
//       mostRepeated = '';

//   let inputArr = input.split('');
//   let arr = [];

//   for(let i = 0; i < inputArr.length; i++) {
//       let count = 0;
//       for(let j = 0; j < inputArr.length; j++) {
//           if(inputArr[j] === inputArr[i]) {
//               count++;
//           }
//       }
//       arr.push(count);
//   }
  
//   /*
//   ** Following line will fetch the first and last repeated item out of input array.
//   */
//   let iteration = true;
//   arr.forEach((val, idx) => {
//       if(val > 1 && iteration) {
//           firstRepeating = inputArr[idx];
//           iteration = false;
//       } else if(val > 1 && firstRepeating !== inputArr[idx]) {
//           lastRepeating = inputArr[idx];
//       }

//   });

//   /*
//   ** Following line will fetch the first and last non repeated item out of input array.
//   */
//   let iteration2 = true;
//   arr.forEach((val, idx) => {
//       if(val === 1 && iteration2) {
//           firstNonRepeating = inputArr[idx];
//           iteration2 = false;
//       } else if(val === 1 && firstNonRepeating !== inputArr[idx]) {
//           lastNonRepeating = inputArr[idx];
//       }
//   });

//   /*
//   ** Following line will fetch the most repeated item out of input array.
//   */
//   mostRepeated = inputArr[arr.indexOf(Math.max(...arr))];


//   console.log('First Repeating Character : ', firstRepeating);
//   console.log('Last Repeating Character : ', lastRepeating);
//   console.log('First Non Repeating Character : ', firstNonRepeating);
//   console.log('Last Non Repeating Character : ', lastNonRepeating);
//   console.log('Most Repeated Character : ', mostRepeated);
// }

// var k = "hellowhereareyou";
// console.log(softvisionAlgo(k));