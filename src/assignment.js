
// Following program will accept the input string as a parameter and returns the following values.

// 1. First Repeated Character
// Solution 1     Time complexity is O(n^2), code is executed n number of times for all the elements inside loop
const __frep = str =>{
  var len = str.length;
  for(var i = 0; i < len; i++){
      for(var j = 1+i; j < len; j++){
          if(str[i] === str[j]){     // returning the chacter 
            return str[i];
          }    
      }
  }
}

var instr = "cacddca";
console.log("First Repeating Char is: ", __frep(instr));
// *** Solution 1 Ends here  ***

// Solution 2     Time complexity is O(n^2), code is executed n number of times for all the elements inside loop
const __repf = str =>{
  var char = 0;         // using char count to check the number of times character appeared
  for (var i = 0; i < str.length; i++){
    var len = str.length
    for (var j = i+1; j < len; j++){
      if (str[i] === str[j]) {
        char++;   // incrementing the char each time we found repeative char
        if (char >= 2) {
        return (str[i]);   // returning char whose char count is more the 2
        }
      }	
    }
  }
}
var inputString = "bacbdaa";
console.log("First Repeating char is: ", __repf(inputString));
// *** Solution 2 ends here ***

// Solution 3   Time complexity is O(n), as its in direct proportion to its size, will grow linearly
const __repk = str => {
    
  var result = [];
  var repChar = {}; // keeping all the repeative chars inside a object.

  for (var i=0; i<str.length; i++){
      var char = str[i];
      repChar[char] = repChar[char] >=1 ? repChar[char] + 1 : 1;
      if (repChar[char] === 2){  //checking if char count is 2 or not
          result.push(char);
      }
  }

  return result[0];  // returning the [0] index of the array for the first repeated char
}
var inputStr = "abcdac";
console.log('First Repeating char is: ',__repk(inputStr));
// *** Solution 3 Ends here  ***

// 2. Last Repeated Character
// Solution 1     Time complexity is O(n), as its in direct proportion to its size, will grow linearly
const __lastRepChar = str => {
    
  var result = [];
  var repChar = {};

  for (var i=0; i<str.length; i++){
      var char = str[i];
      repChar[char] = repChar[char] >=1 ? repChar[char] + 1 : 1;
      if (repChar[char] === 2){
          result.push(char); // pushing all the chars whose occurance is more than 1 into result array
      }
  }
  var lastchar = result.pop();  // storing the last element of the result array to print last repeating char
  return lastchar;
}

var inputStr = "abcabcdd";
console.log('First Repeating char is: ',__lastRepChar(inputStr));
// *** Solution 1 ends here *** 

// 3. First Non Repeating Character
// Solution 1      Time complexity is O(n), as its in direct proportion to its size, will grow linearly
const __nonrep = str => {
  var char = {};

  for (let i = 0; i < str.length; i++) {
      if (char[str[i]]) {
          char[str[i]] ++;
      } else {
          char[str[i]] = 1;
      }
  }
  for (let i = 0; i < str.length; i++) {
      if (char[str[i]] === 1) {  
          return str[i];  // returning char whose char count is 1 for non repeating char
      }
  }
}
var inputString = "bacdaab";
console.log("First Non-Repeating char is: ", __nonrep(inputString));
// *** Solution 1 ends  here ****

// Solution 2     Time complexity is O(n^2), code is executed n number of times for all the elements inside loop
const firstNonRep = str => {
  var arr = str.split('');
  var result = '';
  var counter = 0;
 
  for (var i = 0; i < arr.length; i++) {
    counter = 0;
    for (var j = 0; j < arr.length; j++){
      if (arr[i] === arr[j]) {
        counter += 1;
      }
    }
    if (counter < 2) {
      result = arr[i];
      break;
    }
  }
  return result;
}
console.log('First Non-repeating char is: ', firstNonRep('abbac'));
// *** Solution 2 ends here *** 

// 4. Last Non Repeating Character
// 5. Most Repeated Character

// 2. Return the second smallest element in the array x 
// Solution 1         Time complexity is O(n), is directly proportional to its size and will grow linearly.
const secondSmallest = x =>{
  const sortArray = arr => {
    var len = arr.length;
    if(len < 2) return arr;

    var counter = arr[0];
    var ls = [];
    var gr = [];

    //comparing the counter to next element in an array
    for(var i = 1; i < len; i++) {
      if(arr[i] < counter){
        ls.push(arr[i]);  // pushing values less then counter
      } else{
        gr.push(arr[i]);  // pushing values greater then counter
      }
    } 

    // merging all the arrays into one as and getting the sorted Array
    var sortedArr = [...sortArray(ls), counter, ...sortArray(gr)];
    
    // removing duplicates from the sorted array
    let removeDup = arr => arr.filter((v,i) => arr.indexOf(v) === i);
    let uniqueArr = removeDup(sortedArr);

    return uniqueArr;
  }

   if(x.length < 2)
     return 0;
   else
   { 
     var output = sortArray(x);
     var msg = 'Second smallest is: '
     return (msg + output[1]);  // returning the second smallest value from the sorted array.
   }
}

var testArrays  = [-44,-44,-4,-3,22,5,-11,5,89,0,22];   // here second smallest is -11 after removing duplicates
console.log(secondSmallest(testArrays));  // output is : -11
// *** solution 1 ends here ***

// Solution 2
const secondSmallest = arr =>{
  if (arr.length < 2) {
    return 0;
  }

  var first = arr[0];
  var second = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < second) {
      if (arr[i] < first) {
        second = first;
        first = arr[i];
      } else {
        second = arr[i];
      }
    }
  }
  return ` second smallest: ` + second;
}

var k = [40,7,2,800,5];
console.log(secondSmallest(k))
// ***  Solution 2 ends here ***

// 3. Best Average Grade  
// **  Given a list of student test scores, find the best average grade.
// **  Each student may have more than one test score in the list.
// Solution 1       Time Complexity is O(n^2), as code is executed n number of times for all the elements inside loop
const maxNum = array => {
  mxn = array[0];
  for (var i = 0; i < array.length; i++) {
    if (array[i] > mxn) {
      mxn = array[i];
    }
  }
  return mxn;
};

const minNum = array => {
  min = array[0];
  for (var i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return min;
};

const __avg = arr =>{
  var len =  arr.length;
  var result = {
    gavg:[],
    gmax:[],
    gmin:[]
  };
  
  for(var j=0; j<len; j++){
  
    var total = 0;
    var max = 0;
    var min = 999999;
    var len1 = arr[j].length;
    var sarr = arr[j];
  
  
    for(var i=0; i<len1; i++){
      var grade = sarr[i];
      total += grade;
  
      if(max < grade){
          max = grade;
      }
      if(min > grade){
        min = grade;
      }
    }
    
    result.gavg.push(total/len1);
    result.gmax.push(max);
    result.gmin.push(min);
  }
    
  return `Highest avg is: ` + maxNum(result.gavg) + ` Highest Score is: ` + maxNum(result.gmax) + ` Lowest Score is: ` + minNum(result.gmin);
}
  
var score = [[10,20,30], [40,50,60], [70,80,90,100]];  // Students have more than one score
console.log(__avg(score));
// *** Solution 1 ends here ***


// 4. Median in two sorted and non sorted arrays
// Solution 1            Time complexity is O(n), is directly proportional to its size and will grow linearly.
const __findMedian = (arr1, arr2) => {  // defined two arguments.
  var sortedArray = [...arr1, ...arr2];   // here we are merging the two arrays.
  sortedArray.sort((a,b) => a-b); // now it will sort the merged array in ascending order.

  console.log("Sorted Array : ", sortedArray); // It will display sorted array first.

  var len = sortedArray.length;   // taking the length of the array iin a variable.
  var m1 = (len / 2) - 1;  // bisecting the length of array; we used -1 because array starts with 0(zero); and taking the first M1 value ie the last index of array.
  var m2 = m1 + 1; // capturing the next index value in array for m2.
  
  var median = (sortedArray[m1] + sortedArray[m2]) / 2;  //calculating the median here ie dividing the (m1 + m2) / 2 ; and passing them as index value to sortedArray. 
  
  return median;  // here returning the output  9.5 in our case
}

var inputArr1 = [1,5,7,10,12,14];  // two input arrays with same size inputArr1 and inputArr2
var inputArr2 = [2,8,9,11,13,15];

//calling the findMedian function and passing arguments - It will take two arrays as arguments with same size.
console.log("Median is : ", __findMedian(inputArr1, inputArr2));
// *** Solution Ends here ***

// 5. Binary Search
// Solution 1       Time complexity is O(log n), as it execution will reduce into half after subsequent levels.
const __bsearch = (arr, el) =>{
  arr.sort((a,b) =>{  return a-b; });
  var lowindex = 0;
  var highindex = arr.length - 1;
  var pos;
  var flag = false;

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
  if(flag)
     return true;
  else
     return false;   
}

var barr = [5, 8, 1, 2, 15, 3, 200];
console.log("Element Found : ", __bsearch(barr, 1));
// **** Solution 1 ends here ***

// 6. Grouping words as per anagram
// Solution 1          Time complexity is O(n), is directly proportional to its size and will grow linearly.
const __anagram = arr => {
  const obj = {};   // an object to store all the words after sorting
  arr.forEach( item =>{
      const val = item.split('').sort().join('');
      if (obj[val]) {
          return obj[val].push(item);
      }
      obj[val] = [item];
  });
  return obj;
}


var str = ['cat', 'dog', 'tac', 'god' , 'act'];
var result = __anagram(str);

for(var item in result){
  console.log(result[item].toString());   // returnig all the items from the array object
}
 // *** Solution 1 ends here ***

 // 7. Staircase problem with max step 1,2,3
// Solution 1       Time Complexity is n*(log n)
const __stair = n =>{
  if(n == 1 || n == 0)
      return 1;
  else if(n == 2 )
       return 2;
  else {   
      var output = __stair(n-1) + __stair(n-2) + __stair(n-3);
      return output;
  }
}
console.log("ways to climb: ", __stair(3));  //output : 4
// *** Solution 1 ends here ***

// Solution 2  Using dynamic programming          complexity is O(n)
const __stc = n =>{   
  var res = [n];  
  res[0] = 1;
  res[1] = 1;
  res[2] = 2;

  for(var i = 3; i <= n; i++){
      res[i] = res[i-1] + res[i-2] + res[i-3];
  }
  return res[n];
}
console.log('ways to climb: ', __stc(3));  // input 3, output 4 :: input 4, ouput 7
// *** Solution 2 ends here ***





/*
------------ notes -------------
1. I want you to solve every problem in three different ways.
2. You should tell me pros and cons of every approach.
3. The code should be organised in every approach.
4. All the corner cases should be covered.
5. Time complexity and memory complexity.

*/