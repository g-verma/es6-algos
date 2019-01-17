


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