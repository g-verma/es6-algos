
const __lastrep = str =>{
	let obj = {}

  for(let i = str.length-1 ; i>=0; i--){     
    
    if(obj[str[i]]) {
        obj[str[i]]++;

        if(obj[str[i]] > 1)
            return str[i];
               
      }else{
        obj[str[i]] = 1;
      }
   }
}

var k = 'abcadd';
console.log(__lastrep(k));