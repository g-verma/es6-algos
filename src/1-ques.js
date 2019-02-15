// working second smallest passing test cases
const __secondSmallest = arr =>{
  if(arr.length<=1){
      return 0;
  }
  let first = 9999, second = 9999;

  for(let x of arr){
      if(x < first){
          second =  first;
          first = x;
      }
      else if(x <second && x !=first){
          second = x;
      }
  }
  return second;
}

k = [7,8,0,1]
console.log(__secondSmallest(k))


// Second Smallest with max values and removing duplicates
// solution 2
const __secondSmallest = inputArr => {
    if(inputArr.length <=1) return 0;
  
    let [first,second] = [999, 999];
    
    // let removeDup = arr => arr.filter((v,i) => arr.indexOf(v) === i);

    for(let x of inputArr){
      if(x < second){
        if(x < first){
          second = first;
          first = x;
        }else{
          second = x;
        }
      }
    }
    return second;
  }
  
  k = [20,70,50,40,2,1];
  console.log(__secondSmallest(k))


//Max average without student names
const __maxAvg = inputArr =>{
    let avg = [];
  
    for(let x of inputArr){
      let [total,subCount] = [0,0];
      for(let y of x){
        total += y;
        subCount++;
      }
  
      avg.push(total/subCount);
    }
    return Math.max(...avg);
  }
  
  k=[[10,20,30],[-40,-20,10,30],[80]];
  console.log(__maxAvg(k));


//max avg with names
const __avgMax = scores =>{
    let score = {};
    if(scores.length == 0) return 0;
   
    for(let x=0; x<scores.length; x++){
      let key = scores[0+x][0];
      let value = parseInt(scores[0+x][1]);
  
      if(score[key]){
        score[key]['total'] += value;
        score[key]['subcount']++;
        score[key]['avg'] = (score[key]['total']/score[key]['subcount']);
      }else {
        score[key] = {subcount:'', total:'', avg:''};
        score[key]['total'] = value;
        score[key]['subcount'] = 1;
        score[key]['avg'] = value;
      }
    }
  
    let max = 0;
    for(let z in score){
      score[z].avg > max ? max = score[z].avg : max ;
    }

    // score.forEach(item=>{ 
    //     score[item].avg > max ? max = score[item].avg : max;
    // });

    return max;
  }
  
var pp = [["jerry","65"],["bob","90"],["jerry","23"],["eric","23"]];
console.log(__avgMax(pp));


// First Non repeating character


  
//median with different even and odd size of arrays
const __median = (inputArr1, inputArr2) =>{
    let mergeArr = [...inputArr1, ...inputArr2];
    let sortedArr = mergeArr.sort((a,b)=> a-b);
  
    console.log(sortedArr);
    if(sortedArr.length % 2 == 0) {
      let mid1 = sortedArr.length/2 - 1;
      let mid2 = mid1 + 1;
      let output = (sortedArr[mid1]+sortedArr[mid2])/2;
      return output;
    }else {
      let mid = Math.floor(sortedArr.length/2)
      return sortedArr[mid];
    }
  }
  
var k1= [2,3,5];
var k2 = [1,4,6];
 
console.log(__median(k1,k2));


//Quick Sort
const sortArray = arr => {
    if(arr.length < 2) return arr;
    
    let counter = arr[0];
    let ls = [];
    let gr = [];
    
    for(let x=1; x<arr.length; x++){
        arr[x]<counter ? ls.push(arr[x]) : gr.push(arr[x]);
    }
    let sortedArr = [...sortArray(ls), counter, ...sortArray(gr)];
    
    // removing duplicates from the sorted array
    let removeDup = arr => arr.filter((v,i) => arr.indexOf(v) === i);
    let uniqueArr = removeDup(sortedArr);
    return uniqueArr;
  }
  
  let k = [7,221,705,4,77]
  console.log(sortArray(k));


// 5. Binary Search
// Solution 1       Time complexity is O(log n), as it execution will reduce into half after subsequent levels.
const __bsearch = (arr, el) =>{
    arr.sort((a,b) =>{  return a-b; });
    let lowindex = 0;
    let highindex = arr.length - 1;
    let pos;
    let flag = false;
  
    while(highindex >= lowindex){
        pos = (lowindex + highindex) / 2; 
        
          if(arr[pos] == el){
          flag = true;
          break; 
        }else if(el > arr[pos]){
          lowindex = pos + 1;
        }else{
          highindex = pos - 1;
        }     
    }
    
    return flag ? true : false;  
  }
  
var barr = [5, 8, 1, 2, 15, 3, 200];
console.log(__bsearch(barr, 1));


// 6. Grouping words as per anagram
// Solution 1          Time complexity is O(n), is directly proportional to its size and will grow linearly.
const __anagram = inputArray => {
    let resObj = {};   // an object to store all the words after sorting
    inputArray.forEach( item =>{
        let value = item.split('').sort().join('');
        return resObj[value] ? resObj[value].push(item) : resObj[value] = [item];
    });
    return resObj;
}
let str = ['cat', 'dog', 'tac', 'god' , 'act','xyz'];
console.log(String(Object.values(__anagram(str))));


// 7. Staircase problem with max step 1,2,3
  // Solution 1       Time Complexity is n*(log n)
const __climb = steps =>{
    return (steps==1 || steps==0 ) ? 1 :
      (steps==2) ? 2: 
      __climb(steps-1) + __climb(steps-2) + __climb(steps-3);
}
console.log("ways to climb: ", __climb(3));  //output : 4
  // *** Solution 1 ends here ***
  
  // Solution 2  Using dynamic programming     complexity is O(n)
const __waysToClimb = steps =>{   
    const result = [1,1,2];  
    for(let count = 3; count <= steps; count++){
        result[count] = result[count-1] + result[count-2] + result[count-3];
    }
    return result[steps];
}
console.log('ways to climb: ', __waysToClimb(3));  // input 3, output 4


  // Anagaram of a word is palindrome or not
  const __angagramPali = str =>{
    let obj = {};
    let count = 0;
  
    for(let x in str){
        obj[str[x]] ? obj[str[x]]++ : obj[str[x]] = 1;
    }
    //console.log(obj);
    for(var k in obj){
      if(obj[k] %2 !=0 && count <2){
        count++;
        
        if(count == 2){
          return false;
        }
      }
    }
  
    return true;
  }
  
  var inputStr = 'madam';
  console.log(__angagramPali(inputStr));

// max height of staircase with blocks
maxHeightOfStairs = (steps) =>{
  let output = (-1 + Math.sqrt(1 - (4*-2*steps)))/2
  return Math.floor(output);
}

var steps = maxHeightOfStairs(10);
console.log(steps)


//// 1. Count Length of cycle in Array
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


