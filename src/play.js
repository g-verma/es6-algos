//   // Solution 2  Using dynamic programming     complexity is O(n)
//   const __waysToClimb = steps =>{   
//     const result = [1,1,2];  
//     for(let count = 3; count <= steps; count++){
//         result[count] = result[count-1] + result[count-2] + result[count-3];
//     }
//     return result[steps];
// }
// console.log('ways to climb: ', __waysToClimb(3));  // input 3, output 4

let out = [];
let countLengthOfCycle1 = (arr,ind) => {
  if(!out.includes(arr[ind])){
    out.push(arr[ind]);
    countLengthOfCycle1(arr,arr[ind])
  }else{
    out.push(arr[ind])
  }
  
  return out.lastIndexOf(arr[ind]) - out.indexOf(arr[ind])
}

console.log(countLengthOfCycle1([1,2,3,0,9],4))
console.log(out);

// SI = 0 -- v : 1 --> 1th index 0(val); --> 0th 1
