const seprator = () => {
    console.log("----------------------------");
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