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
		for (var j = 0; j < len; j++){
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
    str = str + obj ['char'] + obj['count'];
})

console.log(str);
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

console.log("indexOf: ", somp.indexOf("this"));

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
    
   // var sum = num.reduce((a,b)=> a+b,0); // method one
    
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

