
function softvisionAlgo(input) {
  let firstRepeating = '',
      lastRepeating = '',
      firstNonRepeating = '',
      lastNonRepeating = '',
      mostRepeated = '';

  let inputArr = input.split('');
  
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









// /* Problem Name is &&& Second Smallest &&& PLEASE DO NOT REMOVE THIS LINE. */

// /**
//  * Instructions to candidate.
//  * 1) Run this code in the REPL to observe its behaviour. The
//  *    execution entry point is main().
//  * 2) Consider adding some additional tests in doTestsPass().
//  * 3) Implement secondSmallest() correctly.
//  * 4) If time permits, some possible follow-ups.
//  */


// /**
//  * Returns the second smallest element in the array x.
//  * Returns 0 if the array has fewer than 2 elements.
//  */
// function secondSmallest(inputArr){
//   let avg = [];
  
//   for(let x in inputArr){
//     let [total,subCount] = [0,0];
//     for(let y of x){
//       total += y;
//       subCount++;
//     }

//     avg.push(total/subCount);
//   }
//   return Math.max(...avg);
// }


// /**
//  * Returns true if all tests pass; otherwise, returns false.
//  */
// function doTestsPass()
// {
//   // todo: add more test cases
//   var testArrays2 = [[0],[0, 1],[3,1,2]];
  
//   var testArrays =['abcac','abhab'];
//   var testResults = [b,h];

//   var testResults2 = [0,1,2];
  
//   // Run through the tests and make assertions
//   for(var i = 0; i < testArrays.length; i++)
//   {
//   if(secondSmallest(testArrays[i]) != testResults[i])
//   {
//     return false;
//   }
//   }
//   return true;
// }


// /**
//  * Main execution entry.
//  */
// if(doTestsPass())
// {
//   console.log("All tests pass!");
// }
// else
// {
//   console.log("There are test failures.");
// }


