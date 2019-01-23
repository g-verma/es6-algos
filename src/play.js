
//anagram of a word is palindrome or not

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
  console.log(obj);
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
