const seprator = msg => {
    if(msg === undefined)
        { msg = " ";}    
    return console.log("--------------- " + msg + " ----------------");
};

seprator();

//int reverse
const rev = inte => 
parseInt(
    inte
    .toString()
    .split("")
    .reverse()
    .join("")
) * Math.sign(inte);

console.log(rev(1234));
seprator();

//string reverse
const revStr = string => 
    string
    .split("")
    .reverse()
    .join("");

var testStr = "hello";
console.log(revStr(testStr));
seprator();

const __rev = string =>{
    let result = "";
    for (let ch of string){
        result = ch + result;
    }
        return result;
    
};

console.log("reverse string is: ", __rev(testStr));
seprator();

//pali
const __pali = string => {
    var slen = string.length;
    for(var i=0; i < slen / 2; i++){
        if(string[i] !== string[slen - i - 1])
        return false;
    }
    return true;
}

var pstr = "00000";
console.log(__pali(pstr));
seprator();



//fb

const __fb = num =>{
   if (num <= 1)  return 1;
   var result = __fb(num - 1 ) + __fb(num - 2);
    return result;
}
var fnum = 5;
console.log(__fb(fnum));
seprator();

//fib optimised
const __fib = (a, b, n) =>{
    if (n)
        return __fib(b, a + b, n-1);
    else return a;
}

console.log(__fib(0, 3, 5));
seprator();

//fib memoization
// const __fimemo = (n, m) =>{
//     m = m || {};

//     if (m[n]) return m[n];
//     if (n <= 1) return 1;
    
//     return m[n] = __fimemo(n - 1, m) + __fimemo(n - 2, m)
// }

// console.log(__fimemo(15, 1));
// seprator();

//score
const __ct = (a, b) =>{
        var score = [0,0];
        var len = a.length; 
    for(var i = 0; i <= len; i++){
        if (a[i] > b[i]) {
            console.log("its inside");
            return score[0] += 1;
        }
        if (a[i] == b[i]) {
            console.log("its inside eq")
        }
        if (a[i] < b[i]) { 
            console.log("its else");
            return score[1] +=1;
        }
    }
    return score;
}

var a = [17, 28,30];
var b = [99, 16, 8];

console.log(__ct(a,b));
seprator();


//first repeative
const __repf = str =>{
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
console.log("First Repeating char is: ", __repf(inputString));
seprator();

//non repeative    
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
console.log("string passed for non repeating: ", inputString);
console.log("First Non-Repeating char is: ", __nonrep(inputString));
seprator();



// duplicates in string
const __repk = str => {
    var len = str.length;
    var result = [];
    var repChar = {};

    for (var i=0; i<len; i++){
        var char = str[i];
        repChar[char] = repChar[char] >= 1 ? repChar[char] + 1 : 1;
        if (repChar[char] === 2){
            result.push(char);
            
        }
    }

    return result
}
var inputStr = "abcabc";
console.log(__repk(inputStr));
seprator();

// character frequencies
const __fr = str =>{
    var arr = {};
    var len = str.length;
    for (var i=0; i<len; i++){
        var char = str.charAt(i);
        if(arr[char])
            arr[char]++;
        else
            arr[char] = 1;
    }
    return arr;
}

var inputString = "abcabcbb";
console.log("Duplicates : ", __fr(inputString));
seprator();


// duplicate strings
var arr = [];
var istr = "abcdaaddb";
var rmdup = [];


istr.split("").forEach(function(item){
    var tempobj ={
        char: item,
        count: 1
    }

    var tempindex = rmdup.indexOf(item);
    if(tempindex == -1){
        rmdup.push(item);
        arr.push(tempobj);
    }else{
        arr[tempindex]["count"] = arr[tempindex]["count"] + 1;
    }

})

var str = "";
arr.forEach(function(obj){
    str = str + obj['char'] + obj['count'];
})

console.log("dupp: ",str);
seprator();
seprator();

var redd = [1,2,4,5];
var ff = ["apple","banana","butter"]
var somp = "this is example"

var mop ={
    char: "hehehe",
    count: 1
}
var barr = [];
var newarr = [];

barr.push(mop);
console.log("inserting obj in array: ",barr);
var last = ff[ff.length - 2]
console.log("array last item : ", last);


mop["count"] = mop["count"] + 1;

console.log("count updated: ", mop.count);

console.log("indexOf: ", redd.lastIndexOf(4));

console.log("indexOf: ", somp.indexOf(-1));

seprator();

const __obIn = () => {
    for (let i = 0; i < 5; i++) {
           barr.push(mop);
        }
        return barr;          
    }

console.log("updated barr: ", __obIn());
seprator();

//bbs with while
function bs(arr) {
    let srt = false;
    while (!srt) {
      srt = true;
      for (var i = 1; i < arr.length; i++) {
        if (arr[i-1] > arr[i]) {
         srt = false;

         let temp = arr[i-1]
         arr[i-1] = arr[i]
         arr[i] = temp
        }
      }
    }
    return arr;
 }
 
arr = [5, 8, 1, 2, 15, 3];
console.log("bs", bs(arr));
seprator();

// bbs without sorted array
const __bbsrt = arr =>{
    for(var i=0; i< arr.length -1; i++){
        for(var j=0; j<arr.length - 1 - i; j++){ 
        if(arr[j] > arr[j+1]){  
            var temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp;
            }
        }
    }

    return arr;
}

console.log("normal bs : ", __bbsrt(arr));
seprator();

// sorted bbs
const __bsrt = arr =>{
    var done = true;

    for(var i=0; i< arr.length; i++){
      for(var j=0; j<arr.length - 1 - i; j++){       
            if(arr[j] > arr[j+1]){
                
                var temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp;
                done = false;
            }
        }
        if(done) return;
        
    }

    return arr;    
}

var inparr = [5, 8, 1, 2, 15, 3];
console.log("sorted Bs: ", __bsrt(inparr));


// element is less than 100 of not
const __same = arr =>{

    const el = elm =>{
        return (elm < 100);
    }

    return arr.every(elm=>{
        return (elm < 100);
    });
}
seprator();

var sarr = [5, 8, 1, 2, 15, 3, 200];
console.log("elements are less than 100: ", __same(sarr));


seprator();

 
class Stack{
   
    constructor(){
      this.items = [];
      this.push = this.push.bind( this );
    }

    push( item ) {
      this.items.push( item );
    }
    
    pop() {
      this.items.pop();
    }

 
    printStack() {
      for( let i = 0; i < this.items.length; i = i + 1 ){
        console.log( this.items[ i ] );
      }
    }
    
  }
  
  var stack = new Stack();
  
  stack.push(10);
  stack.push(20);
  stack.push(30);
  
 stack.printStack();
 console.log( stack.items );
seprator();

//pow 10
const __pow = num =>{
    while (num > 9 && num % 10 == 0) 
         num /= 10;
    return num == 1;
}

console.log("pow of 10 is: ", __pow(10000));
seprator();

//second min
var sarr = [5, 8, 1, 2, 15, 3, 200];
const __smin = arr =>{
arr.sort((a,b)=>{ 
    return a-b;
});
console.log("sorted arr: ", arr);
return arr;
}

console.log("second min: ", __smin(sarr)[1]);
seprator();

//second min 
const __ssmin = arr => {
    var lowest = 0;
    for (var i = 1; i < arr.length; i++) {
     if (arr[i] < arr[lowest]) lowest = i;
    }
    return lowest+1;
   }

var narr = [5, 8, 1, 2, 15, 3, 200];
console.log("smallest: ", __ssmin(narr));
seprator();


//bin search

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
console.log("bin search: ", __bsearch(barr, 1));
seprator();





function arrSort(arr, subkey) {
  
  subkey = (subkey === undefined ? 0 : subkey);

  var a = arr.slice(0),
      b = [], x;

  for (x in a) {
    b[x] = [a[x][subkey], x];
  }

  b = b.sort();
  arr.splice(0, arr.length);

  for (x in b) {
    arr.push(a[b[x][1]]);
  }

  return arr;
}

var stack = [-3, 14, 18, -5, 30];
console.log("sorted with rec", arrSort(stack));

seprator();


var unsortedArray = [-10, 7, 29, 30, 5, -10, -70];

console.log("largest product yielded from following integers; ", computeProduct(unsortedArray)); // 21000

function sortIntegers(a, b) {
  return a - b;
}

// Greatest product is either (min1 * min2 * max1 || max1 * max2 * max3)
function computeProduct(unsorted) {
  var sortedArray = unsorted.sort(sortIntegers),
    product1 = 1,
    product2 = 1,
    array_n_element = sortedArray.length - 1;

  // Get the product of three largest integers in sorted array
  for (var x = array_n_element; x > array_n_element - 3; x--) {
      product1 = product1 * sortedArray[x];
  }

  product2 = sortedArray[0] * sortedArray[1] * sortedArray[array_n_element];

  if (product1 > product2) return product1;

  return product2;
}
seprator("array concat");


//merge median
const __findMedian = (arr1, arr2) => {  // defined two arguments.
    var sortedArray = [...arr1, ...arr2];   // here we are merging the two arrays.
    sortedArray.sort((a,b) => a-b); // now it will sort the merged array in ascending order.

    console.log("Sorted Array : ", sortedArray); // It will display sorted array first.

    // var median = 0;
    // for (var i = 0; i < sortedArray.length; i = i + 1) {
    //     median = median + sortedArray[i];
    // }
    // var output = median / sortedArray.length ;
    // return output;  
    
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




  //merge two and remove duplicates
  function merge_array(array1, array2) {
    var result_array = [];
    var arr = array1.concat(array2);
    var len = arr.length;
    var assoc = {};

    while(len--) {
        var item = arr[len];

        if(!assoc[item]) 
        { 
            result_array.unshift(item);
            assoc[item] = true;
        }
    }

    return result_array;
}


var array1 = [1, 2, 3];
var array2 = [2, 30, 1];

console.log(merge_array(array1, array2));
seprator("array merge");

const __onrep = str => {
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


//objects with sum avg median
const __foc = num =>{
    var resObj = {items: 0, total: 0, avg: 0, median: 0};
    var len = num.length;
    var m1= (num.length / 2) - 1;
    var m2 = m1 + 1;
    
   // var sum = num.reduce((a,b)=> a+b,0); // add method one
    
    const __arrSum = arr =>{ // method 2
        var summ = 0;

        for (var i in arr){  // method 2
            summ += arr[i];
        }
        return summ;
    }

    var summArray = __arrSum(num);

    console.log("the sum is", summArray);
          
   
    resObj.items = len;
    resObj.total = summArray;
    resObj.avg = summArray / len;
    resObj.median = (num[m1] + num[m2]) / 2;

    return resObj;
}


// var inNum = [5, 8, 1, 2, 15, 3, 200,100];
var sortedArray = [1,2,5,7,8,9,10,11,12,13];
console.log("FOC : ", __foc(sortedArray)); 
seprator("reports");


//reports
const __report = num => {
    
    var resObj = {items: 0, s1total: 0, s2total:0, avg: 0, median: 0};
    var len = num.length;

    console.log("s1 ", num.s1);
    console.log("s2 ", num.s2);
    
    var m1= (num.s1.length / 2) - 1;
    var m2 = m1 + 1;

    const __arrSum = arr =>{       // add method 2
        var summ = 0;

        for (var i in arr){  
            summ += arr[i];
        }
        return summ;
    }

    const __getLen = (num) => {
        var length = Object.keys(num).length;
        return length;
    }

    for(var i in num){
        console.log("arrSum is:  ", __arrSum(i));
    }


    var soneres = __arrSum(num.s1); //s1 total
    var stwores = __arrSum(num.s2);

    var s1len = __getLen(num.s1);
    var s2len = __getLen(num.s2);

    console.log("S1 length is: ", s1len );
    console.log("S2 length is: ", s2len );

    console.log("S1 sum: ", soneres,"  S2 Sum: ", stwores);
       
    resObj.items = s1len + s2len;
    resObj.s1total = soneres;
    resObj.s2total = stwores;

    resObj.avg = soneres / len;
    resObj.median = (num[m1] + num[m2]) / 2;

    return resObj;
}



var marks = {
    s1: {
        geo: -10,
        phy: 20,
        chem: -30,
        maths: 40
    }, 
    s2: { 
        geo: -50,
        phy: -60,
        chem: -70,
        maths: -80,
        bio: -90
    } 
};

console.log("Reports: ", __report(marks)); 
seprator("Merge two arrays");

const __rofl = string => {
    var output = {items:{}, sumtot : 0 };  //output item:{ 0:'a', 1: 'b', 2:'r'}
    var summ = 0;

    for(var i=0; i<string.length; i++){
        output.items[i] = string[i];
        output.sumtot = summ += string[i];
    }

    console.log("sum of mergerd array is: ", output.sumtot);
    return output;
}

var inNum = [5, 8, 1, 2, 15, 3, 200,100];
var inputStr = "abracadabra";
console.log("merged array is: ",__rofl(inNum));


var num1 = [1, 3, 4, 5]
var num2 = [1, 4, 8, 3]
num1.push.apply(num1,num2);
console.log("merged array: ", num1);

//promise
var pp = new Promise((resolve,reject)=>{
    setTimeout(() =>{
        resolve('-->');
    }, 300);
});

pp.then(value=>{return console.log(value + ' hmm')});

console.log(pp);




// Time Complexities



seprator(" Time Complexity O(1) : ");  // Constant Time Algorithm
//example 1
var number = [1, 3, 4, 5];
console.log(number[3]);

//example 2
number.push(44);
console.log("updated array", number);


seprator(" Time Complexity O(n) : ");  // Linear Time Algorithm

//example 1
for(var i = 0; i< 10; i++){ // Time complexity will be O(n), as it will iterate over an over till 10.
   console.log(i); // so complexity will depend on input
}

//example 2
var num = [5, 8, 1, 2, 15, 3, 200,100]; // here we are traversing the array so it will iterate till the length that nth item.
for(var i = 0; i< num.length; i++){
    console.log(num[i]);
}


seprator(" Time Complexity O(logn) : "); // Logarithmic Time Algorithm

//example 1
const __fibb = num =>{  // here you will reduce the time by half every time when iterating for the next time.
    if (num ==0 || num <= 1)  return 1;
    var result = __fibb(num - 1 ) + __fibb(num - 2);
     return result;
 }
 var ffnum = 5;
 console.log(__fibb(ffnum));

// example 2

const __binarySearch = (arr, el) =>{

    arr.sort((a,b) =>{  return a-b; });
    
    var lowindex = 0;
    var highindex = arr.length - 1;
    var pos;
    var flag = false;

    while(highindex >= lowindex){
        pos = (lowindex + highindex) / 2; // here we are dividing the length into half, and will proceed with half length to check.
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
console.log("binary Search: ", __binarySearch(barr, 1));

seprator(" Time Complexity O(n^2) : ");  // Quadratic Time Complexity

//example 1
for(var i = 0; i < 2; i++) {    
    for(var j = 0; j < 5; j++) { // in this we are iterating till it will loop to all the elements of outer loop also.
       console.log("value of i", i, "value of j", j);
    }
}
//example 2

const __bbsort = arr =>{
    for(var i=0; i< arr.length -1; i++){
        for(var j=0; j<arr.length - 1 - i; j++){ 
        if(arr[j] > arr[j+1]){  
            var temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp;
            }
        }
    }

    return arr;
}
arr = [5, 8, 1, 2, 15, 3];
console.log("bubble sort : ", __bbsort(arr));

seprator(" Given an unsorted array of integers, count the number of subarray which adds to a given number. ");
// can used for “Find a subarray such that the sum of elements in it is equal to zero


const __givenSumFn = (arr, givenSum) => {
  
    var currSum = 0;
    var start = 0;
    var end = 0;
    
   for(var i =0; i < arr.length; i++){
     
     if(currSum == givenSum){
        var first = end - 1;
        console.log("sub set is : ", arr[first], arr[end]);
        console.log("current Sum is ", currSum);
        break;
     }
     
     if(currSum <= givenSum){
       
      end++;
        if(end < arr.length)
            currSum += arr[end];
       
      console.log("inside if;  ",currSum); 
     }else{
        currSum -= arr[start];
        start++; 
       
       console.log("currSum is: ", currSum);
     }
    
   }
    
   return currSum; 
    
  }
  
  var inputArr = [5, 8, 1, 8, 2, 15, 3];
  var sumToFind = 9;
  
  console.log("this is given sum", __givenSumFn(inputArr, sumToFind));

  seprator("2d arrays");
//   var ddarr = [[1, 2],[3, 4],[5, 7]];
//   console.log(ddarr[0]);


  const __matrix = (rows, cols, defaultValue) => {
    var arr = [];

    for(var i=0; i < rows; i++){
        arr.push([]);
        arr[i].push( new Array(cols));
  
        for(var j=0; j < cols; j++){
          arr[i][j] = defaultValue;
        }
    }
  
  return arr;
  }

console.log(__matrix( 3, 3,'x')); // 2 lines, 3 cols filled with 'x'
console.log(__matrix( 4, 4, 0));  // 10 lines, 5 cols filled with 0

seprator(" compare ");

//Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.


const __diffArray = (arr1, arr2) => {
    var newArr = [];
    
    const onlyinFirst = (first, second) => {
      for (var i = 0; i < first.length; i++) {
      if(second.indexOf(first[i]) === -1) {
        console.log("inx",second.indexOf(first[i]));  
        newArr.push(first[i]);
      }
    }
    }
    onlyinFirst(arr1,arr2);
    onlyinFirst(arr2,arr1);
    
    return newArr;
    
  }
  
  const diffArray = (arr1, arr2) => {
    return arr1.concat(arr2).filter(item => !arr1.includes(item) || !arr2.includes(item))
  }
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
  console.log(diffArray([1,2,3,5],[1,2,3,4,5])); //should return 4
  console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])); //should return ['diorite', 'pink wool'];
  console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));


seprator(" max sum with contiguous array");
/*The idea behind -
A) Kadane's Algo - Basically I have to look for all contiguous sub-arrays of size 4, and also keep track of the maximum sum contiguous sub-array until the end. Whenever I find a new contiguous sub-array, I check if the current sum is greater than the max_sum so far and updates it accordingly.
B) In the first loop is I am just generating the sum of the sub-array of the first 4 elements.
C) In the second loop, I am traversing a sliding window - at each iteration, I am deducting the first element from left and adding next element to the right. And after doing this, updaing the max_so_far to its highest value, by comparing it to its previous hightest value.
*/

function findMaxAverage(nums, k) {

	var curr_max = 0;
	for (var i = 0; i < k; i++) {
		curr_max += nums[i];
	}

	var max_so_far = curr_max;

	for (var j = k; j < nums.length; j++) {
		curr_max += (nums[j] - nums[j - k]);
		// Each time we get a new curr_sum compare it with max_so_far and update max_so_far if it is greater than max_so_far    
		max_so_far = Math.max(curr_max, max_so_far);
	}
	return max_so_far / k;
}

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));


function kadane(arraySeq) {
    var maxEndingHere = 0,
        maxSoFar = 0,
        arrayMEHTracker = [],
        arrayLargestSubarray = [];
    
    arraySeq.forEach(function(el) {
        maxEndingHere = Math.max(0,maxEndingHere + el);
        if (maxEndingHere > 0) {
            arrayMEHTracker.push(el);
        } else {
            arrayMEHTracker.length = 0;
        }
        
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
        if (maxSoFar === maxEndingHere) {
            arrayLargestSubarray = arrayMEHTracker.slice(0); 
        }
    });
    
    return {
        array: arrayLargestSubarray,
        sum: maxSoFar
    };
}

function printResults() {
    var result = kadane([-2,1,-3,4,-1,2,1,-5,4]);
    
    function printArray() {
        var stringPrint = "";
        result.array.forEach(function(el) {
            stringPrint += el;
        });
        return stringPrint
    }
    return "From largest subarray of: " +printArray() +" Sum is: " + result.sum;
}



const __maxSum = (arr) =>{
    var currentSum = 0;
    var globalMax = arr[0];

    for(let i=0; i<arr.length; i++){
        currentSum = arr[i] > currentSum + arr[i] ? arr[i] : currentSum + arr[i];
        globalMax = globalMax > currentSum ? globalMax : currentSum;
    }

    return globalMax;
}

var karr = [1,2,-11,4,7,-2,3];

console.log("contiguous array sum: ", __maxSum(karr));




seprator(" diagonal ");

const __matg = array =>{

    var rows = array.length;
    var cols = array[0].length;

    for (var n = 0; n < cols + rows - 1; n = n+1)
    {
        var r = n;
        var c = 0;
        var str = '';
        
        while (r >= 0 && c < cols)
        {
            if (r < rows)
            str += array[r][c];
            r -= 1;
            c += 1;
        }
            console.log(str, '--');
    }
};

var inputMatrix = [[1,2,3],[4,5,6],[7,8,9]]
console.log(" -- ", __matg(inputMatrix));


seprator("duplicate removal using Object ")

const __rrd = str => {
    var ostr = str.split('');
    var obj = {};

    for(var i=0; i < ostr.length; i++ ){
        obj[ostr[i]] = "";
    }

    //return Object.keys(obj);
    
    for(var i in obj){
        console.log(i, obj[i]);
    }
}

var ystr = "dssss"
console.log("removed duplicates using obj: ", __rrd(ystr));

const __mx = arr =>{
    var c = 0;
    var gs = arr[0];

    for(var i =0; i < arr.length; i++){
        c = arr[i] > c + arr[i] ? arr[i] : c + arr[i];
        gs = gs > c ? gs : c; 
    }
    return gs;
}
var iarr = [1,2,3,-2,7,-1];
console.log("cgs max subarr: ",__mx(iarr));




//square root function 
const __sqrt = (n, g) => {    // g is guess number
    if (!g) {  
        g = n / 2.0;
    }
    var d = n / g;         // d is divide
    var ng = (d + g) / 2.0;
    if (g == ng) {          
        return g;
    }
    return __sqrt(n, ng);
}
console.log(__sqrt(25)); 


//egg drop with Math fn, 2 eggs and k floors
//because in trial of 10 floors and 2 eggs we can never exceed more than 4 trials.
const __twoEggDrop = k =>{ 
    return Math.ceil(-1.0 + __sqrt(1 + 8*k)/2.0); 
 } 
 
 var k = 10; 
 console.log("two egg drops", __twoEggDrop(k));  //output 4




 //egg drop
 const __max = (a,b) =>{
    return (a>b)?a:b;  //returning maximum of two integers
}

const __eggDrop = (n,k)=>{
    var ef = [[n+1],[k+1]];
    var res;
    var i,j,x;

    for(i = 1; i <=n; i++){
        ef[[i],[1]] = 1;
        ef[[i],[0]] = 0;
    }

    for(j = 1; j <= k; j++){
        ef[[1],[j]]=j;

    }

    for(i=2; i<=n; i++){
        for(j=2; j<=k; j++){

            ef[[i],[j]] = Number.MAX_SAFE_INTEGER;
            
            for(x=1; x<=j; x++){
                res = 1 + __max(ef[[i-1],[x-1]], ef[[i],[j-x]]);
                if(res < ef[[i],[j]]){
                    ef[[i],[j]] = res;
                }
            }
        }
    }

    return ef[[n],[k]];

}

var n = 2, k = 36;    // for n:2   k:36   output is 8
console.log("egg droppped: ", __eggDrop(n,k));   //output is 4



//sum of sub array's 
function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;
  
    for (let item of arr) { // for each item of arr
      partialSum += item; // add it to partialSum
      maxSum = Math.max(maxSum, partialSum); // remember the maximum
      if (partialSum < 0) partialSum = 0; // zero if negative
    }
  
    return maxSum;
  }
  
  console.log( getMaxSubSum([-1, 2, 3, -9]) ); // 5
  console.log( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
  console.log( getMaxSubSum([-2, -1, 1, 2]) ); // 3
  console.log( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
  console.log( getMaxSubSum([1, 2, 3]) ); // 6
  console.log( getMaxSubSum([-1, -2, -3]) ); // 0




seprator("--------- singly linked list ------------")
class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    addToHead(value){
        var node = new Node(value,null);

        if(this.head){
           node.next = this.head;
        }else{
            this.tail = node;
        }
        this.head = node;
    }

    addToTail(value){
        var node = new Node(value,null);

        if(this.tail){
            this.tail.next = node;

        }else{ 
            this.head = node;
        }
        
        this.tail = node;
      }

    showList(){
        if(!this.head) 
            return null;

        var current = this.head;
        var listy = [];

        while(current){
          listy += "➔"+ current.value;
         
          current = current.next;
        }
        
        console.log(listy); // returning linked list 
      }     
      
      
   remove(value) {
      let current = this.head;

      //first node remove
      if (current.value === value) {
        this.head = current.next;
      } else {
        let previous = current;
        while (current.next) {
      
          // middle value remove
          if (current.value === value) {
            previous.next = current.next;
            break;
          }

          previous = current;
          current = current.next;
        }
        // last node remove
        if (current.value === value) {
          previous.next = null;
        }
      }

    }

}


  const list = new LinkedList();
  
  list.addToHead(1)
  list.addToHead(5) 

  list.remove(5);

  list.addToTail(123)
  list.addToTail(503)
  
  list.addToHead(100)
  list.showList();




  seprator(" ----- BlockChain ------")
  
  //const sha256 = require('js-sha256') // We need sha256 encryption

  class Block {
    constructor(index, timestamp, data, prevHash) {
      this.index = index;
      this.timestamp = timestamp;
      this.data = data;
      this.prevHash = prevHash;
    //   this.thisHash = sha256(
    //     this.index + this.timestamp + this.data + this.prevHash
    //   );
    }
  }
  
  const createGenesisBlock = () => new Block(0, Date.now(), 'Genesis Block', '0');
  
  const nextBlock = (lastBlock, data) =>
    new Block(lastBlock.index + 1, Date.now(), data, lastBlock.thisHash);
  
  const createBlockchain = num => {
    const blockchain = [createGenesisBlock()];
    let previousBlock = blockchain[0];
  
    for (let i = 1; i < num; i += 1) {
      const blockToAdd = nextBlock(previousBlock, `This is block #${i}`);
      blockchain.push(blockToAdd);
      previousBlock = blockToAdd;
    }
    console.log(blockchain);
  };
  
  const lengthToCreate = 3;
  createBlockchain(lengthToCreate);


  seprator(" ----- hash table ------")
  class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

class Table {
    constructor(size) {
        this.cells = new Array(size);
    }

    hash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) total += key.charCodeAt(i);
        return total % this.cells.length;
    }

    insert(key, value) {
        const hash = this.hash(key);
        if (!this.cells[hash]) {
            this.cells[hash] = new Node(key, value);
        } else if (this.cells[hash].key === key) {
            this.cells[hash].value = value;
        } else {
            let node = this.cells[hash];
            while (node.next) {
                if (node.next.key === key) {
                    node.next.value = value;
                    return;
                }
                node = node.next;
            }
            node.next = new Node(key, value);
        }
    }

    get(key) {
        const hash = this.hash(key);
        if (!this.cells[hash]) return null;
        else {
            let node = this.cells[hash];
            while (node) {
                if (node.key === key) return node.value;
                node = node.next;
            }
            return null;
        }
    }

    getAll() {
        const table = [];
        for (let i = 0; i < this.cells.length; i++) {
            const cell = [];
            let node = this.cells[i];
            while (node) {
                cell.push(node.value);
                node = node.next;
            }
            table.push(cell);
        }
        return table;
    }
}


const hh = new Table(1,2,4,5,4,7);
console.log(hh);



//binary tree

//Binary tree
//every node value in the left is smaller than the value of the node and value at the right is higher than the value of the root.
class Tree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value) {
        if (value <= this.value) {
            if (!this.left) this.left = new Tree(value);
            else this.left.insert(value);
        } else {
            if (!this.right) this.right = new Tree(value);
            else this.right.insert(value);
        }
    }

    contains(value) {
        if (value === this.value) return true;
        if (value < this.value) {
            if (!this.left) return false;
            else return this.left.contains(value);
        } else {
            if (!this.right) return false;
            else return this.right.contains(value);
        }
    }

    depthFirstTraverse(order, callback) {
        order === "pre" && callback(this.value);
        this.left && this.left.depthFirstTraverse(order, callback);
        order === "in" && callback(this.value);
        this.right && this.right.depthFirstTraverse(order, callback);
        order === "post" && callback(this.value);
    }

    breadthFirstTraverse(callback) {
        const queue = [this];
        while (queue.length) {
            const root = queue.shift();
            callback(root.value);
            root.left && queue.push(root.left);
            root.right && queue.push(root.right);
        }
    }

    getMinValue() {
        if (this.left) return this.left.getMinValue();
        return this.value;
    }

    getMaxValue() {
        if (this.right) return this.right.getMaxValue();
        return this.value;
    }
}


var tree = new Tree(8,);

// left node because values are lesser than root
tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);

// right node because values are greater than root
tree.insert(6);
tree.insert(7);
tree.insert(8);
tree.insert(9);
console.log(tree);

console.log("search value found: ", tree.search(8));

const cb = x =>{ return console.log(x);}
console.log("pre depth first", tree.depthFirstTraverse('pre',cb));



//Ugly numbers are numbers whose only prime factors are 2, 3 or 5. The sequence 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, … shows the first 11 ugly numbers. By convention, 1 is included.
//Given a number n, the task is to find n’th Ugly number.
const __ugno = n =>{
    var ugly = [n];  //will store ugly numbers here
    var i2 = i3 = i5 = 0;
    var nm2 = 2,
        nm3 = 3,
        nm5 = 5;
    var nxtUgly = 1;
    ugly[0] = 1;  //initialised ulgy array with 1
    
    for(let i=1; i<n; i++){
        nxtUgly=Math.min(nm2, Math.min(nm3,nm5));
        ugly[i] = nxtUgly;

        if(nxtUgly == nm2){
            i2 += 1;
            nm2 = ugly[i2]*2;
        }
        if(nxtUgly == nm3){
            i3 += 1;
            nm3 = ugly[i3]*3;
        }
        if(nxtUgly == nm5){
            i5 += 1;
            nm5 = ugly[i5]*5;
        }
    }

    return nxtUgly;
}

console.log(" Ugly ---> ",__ugno(150));



//ugly number with while
const __isUgly = num => {
    var arr = [2, 3, 5];
    arr.forEach( prime => {
        while (num && num % prime === 0) {
            num /= prime;    // num = num/prime
        }
    });
    return num === 1;
}
console.log("ugly is", __isUgly(150))
document.write(__isUgly(150));