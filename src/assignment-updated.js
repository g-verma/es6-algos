//1. Best average grade and run length encoding
//-- given an array scores [][] = {{“jerry”,”65”},{“bob”,”91”}, {“jerry”,”23”}, {“Eric”,”83”}} Find the student with highest average score
//2. Second smallest 
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
  var char = 0;  
  
  // using char count to check the number of times character appeared
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
// Solution 1
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

var k = 'abca';
console.log('last repeated: ', __lastrep(k));
// Solution 1 ends here

// 5. Most Repeated Character max

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

// Solution 2
const __av = scores =>{
  var score = {};
  if(scores.length == 0){
    return 0;
  }
  
  for(var i=0; i<scores.length; i++){
  
    var key = scores[0+i][0];
    var value = parseInt(scores[0+i][1])
  
    if(score[key]){
      score[key]['total'] +=  value ;
      score[key]['subcount']++
      score[key]['avg'] = (score[key]['total']/score[key]['subcount']);
    }
    else{
      score[key] = {subcount:"", total:"",avg:""};
      score[key]['total'] = value;
      score[key]['subcount'] = 1;
      score[key]['avg'] = value;
    }
  
  }
  
  // console.log(score);
  var max = 0;
  for(var i in score){
    if(score[i].avg>max){
      max = score[i].avg;
    }
  }
  
  return max;
}


var pp = [["jerry","65"],["bob","90"],["jerry","23"],["eric","23"]];
console.log(' avg is ',__av(pp));
// Solution 2 ends here


// 4. Median in two sorted and non sorted arrays with same size
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
// *** Solution 1 Ends here ***

// Solution 2 with different sizes
const __median = (arr1, arr2) =>{
  var mergeArr = [...arr1, ...arr2];

  var sortedArr = mergeArr.sort((a,b)=>a-b);

  
  //console.log(sortedArr);
  if(sortedArr.length % 2 == 0){
    var mid1 = sortedArr.length/2
    var mid2 = mid1 + 1;
    var output = (sortedArr[mid1] + sortedArr[mid2])/2;
    return output;
  }else{
    var mid = Math.floor(sortedArr.length/2);
    return sortedArr[mid];
  }
  
}

var k1= [2,3,5,6,7,9,10];
var k2 = [1,8,11,12,13,14];

console.log(__median(k1,k2));
// Solution 2 ends here



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

 // *** Solution 1 ends here ***

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
// *** Solution 2 ends here ***


// Anagram of a word is Palindrome or not
// Solution 1 

const __angagramPali = str =>{
  var obj = {};
  var count = 0;

  for(var i=0;i<str.length; i++){
    if(obj[str[i]]){
      obj[str[i]]++;
    }else{
      obj[str[i]] = 1;
    }
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
console.log('string is palindrome ', __angagramPali(inputStr));
//Solution 1 ends here



/*
------------ notes -------------
1. I want you to solve every problem in three different ways.
2. You should tell me pros and cons of every approach.
3. The code should be organised in every approach.
4. All the corner cases should be covered.
5. Time complexity and memory complexity.

*/


// With Test Cases

function secondSmallest(x)
{
  // todo: implement this function

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
     return output[1];  // returning the second smallest value from the sorted array.
   }
}


/**
 * Returns true if all tests pass; otherwise, returns false.
 */
function doTestsPass()
{
  // todo: add more test cases
  var testArrays  = [[0], [-44,-44,-4,-3,22,5,-11,5,89,0,22], [5,22,65,1,666,6] ];
  var testResults = [0,-11, 5];

  // Run through the tests and make assertions
  for(var i = 0; i < testArrays.length; i++)
  {
  if(secondSmallest(testArrays[i]) != testResults[i])
  {
    return false;
  }
  }
  return true;
}


/**
 * Main execution entry.
 *//**
 * Main execution entry.
 */
if(doTestsPass())
{
  console.log("All tests pass!");
}
else
{
  console.log("There are test failures.");
}

