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
