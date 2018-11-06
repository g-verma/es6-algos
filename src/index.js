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

console.log(__rev(testStr));
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