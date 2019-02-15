// let xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://reqres.in/api/users/2');
// xhr.send();
// xhr.onload = function() {
//   if (xhr.status != 200) {
//     console.log(xhr.status + ': ' + xhr.statusText); 
//   } else {
//     console.log(xhr.responseText.first_name); 
//   }
// };





// 1. Count Length of cycle in Array
// Given a function with 2 parameters - an integer array, and a startIndex
// Every element of array is greater than or equal to zero
// Starting from array[startIndex], follow each element to the index points to
// Continue doing this until you find a cycle, return the cycle
// return -1 if no cycle found.

// Test Case :- countLengthOfCycle([1,0],0) //output should be 2
// countLengthOfCycle([1,2,0],0) //output should be 3  

// const findloop = (array,index) =>{
//   var noLooopArray = [];
//   let length = 0;
//   if(index!=0){
//     start=0;
//     end =array.legth;
//   }
//   for(var i = index;i<array.length;i++){
//       if(noLooopArray.indexOf(array[i]) === -1){
//         noLooopArray.push(array[i]);
//         length++;
//       }else{
//         break;
//       }

//   }
//   for(let y=start;y<index;i++){

//   }
//   return length++;
// }
// let arr = [1,0];
// console.log(findloop(arr,0))

// 1,2,3,1,4,5   //1
// 1,2,3 //non loop



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

console.log(countLengthOfCycle1([1,2,3,2,5],3))
console.log(out);