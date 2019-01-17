
// Following program will accept the input string as a parameter and returns the following values.

// 1. First Repeated Character
// Solution 1
const __frep = str =>{
  var len = str.length;
  for(var i = 0; i < len; i++){
      for(var j = 1+i; j < len; j++){
          if(str[i] === str[j]){
            return str[i];
          }    
      }
  }
}

var instr = "cacddca";
console.log("First Repeating Char is: ", __frep(instr));
// *** Solution 1 Ends here  ***

// Solution 2
const __repf1 = str =>{
  var char = 0;
  for (var i = 0; i < str.length; i++){
    var len = str.length
    for (var j = i+1; j < len; j++){
      if (str[i] === str[j]) {
        char++;
        if (char >= 2) {
        return (str[i]);
        }
      }	
    }
  }
}
var inputString = "bacbdaa";
console.log("First Repeating char is: ", __repf1(inputString));
// *** Solution 2 ends here ***

// Solution 3
const __repk = str => {
    
  var result = [];
  var repChar = {};

  for (var i=0; i<str.length; i++){
      var char = str[i];
      repChar[char] = repChar[char] >=1 ? repChar[char] + 1 : 1;
      if (repChar[char] === 2){
          result.push(char);
      }
  }

  return result[0];
}
var inputStr = "abcdac";
console.log('First Repeating char is: ',__repk(inputStr));
// *** Solution 3 Ends here  ***



// 2. Last Repeated Character

// 3. First Non Repeating Character
// Solution 1
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
          return str[i];
      }
  }
}
var inputString = "bacdaab";
console.log("First Non-Repeating char is: ", __nonrep(inputString));
// *** Solution 1 ends  here ****

// Solution 2
const firstNonRep = str => {
  var arr = str.split('');
  var result = '';
  var counter = 0;
 
  for (var i = 0; i < arr.length; i++) {
    counter = 0;
 
    for (var j = 0; j < arr.length; j++) 
    {
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
// Solution 1
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
     var msg = 'Second smalles is: '
     return (msg + output[1]);  // returning the second smallest value from the sorted array.
   }
}

var testArrays  = [-44,-44,-4,-3,22,5,-11,5,89,0,22];   // here second smallest is -11 after removing duplicates
console.log(secondSmallest(testArrays));  // output is : -11
// *** solution 1 ends here ***

// 3. Best Average Grade  
// **  Given a list of student test scores, find the best average grade.
// **  Each student may have more than one test score in the list.
// Solution 1 
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
  
var score = [[10,20,30], [40,50,60], [70,80,90]];  // Students have more than one score
console.log(__avg(score));
// *** Solution 1 ends here ***


// 4. Median in two sorted and non sorted arrays
// Solution 1
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
// Solution 1
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


/*

------------ notes -------------
1. I want you to solve every problem in three different ways.
2. You should tell me pros and cons of every approach.
3. The code should be organised in every approach.
4. All the corner cases should be covered.
5. Time complexity and memory complexity.

*/