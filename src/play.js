// last repeating char
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

var k = 'abab';
console.log('last repeated: ', __lastrep(k));

// // test case [['abcab'],['asdas'],['zxzxa']]
// // out = [[c],[d],[a]];




let fnonrepeat = (str) => {
  let map = new Map();

  for(let char of str){
    if(!map.has(char)){
      map.set(char,1);
    }else{
      map.set(char,map.get(char)+1);
    }
  }

  console.log('orignial array ',map)
  let reverse = new Map([...map].reverse());
  console.log('reverse ', reverse);

  
  for(let entry of reverse){
     console.log('entry ',entry)
     if(entry[1] == 1){
       return entry[0];
     }
  }
}

var inputString = "abcoab";
console.log(fnonrepeat(inputString));


// //remove dup using obj
// const __rdnew = str => {
//   var ostr = str.split('');
//   var obj = {};
  
//   // let k = [1,1,2,5,2];
  
//   // for(let i of k ){  obj[i] = ""; }

//   // console.log(obj);
//   // // return Object.keys(obj);
  
  



// }




// var ystr = "dssss"
// console.log("using object", __rdnew(ystr));





// let maxAvgGrade = (arr) => {

//   let studentMap = new Map();
//   let count = 0;
//   let maxAvg = 0;

//   arr.forEach(item => {
//     if(!studentMap.has(item[0])){
//       count = 1;
//       studentMap.set(item[0], item[1]/count);
//     }else {
//       let sum = studentMap.get(item[0]) + item[1];
//       count++;
//       studentMap.set(item[0],sum/count);
//     }
//   })
  
//   for (let avg of studentMap.values()) {
//     (avg > maxAvg) ? maxAvg = avg : maxAvg;
//   }
  
//   return maxAvg;
//   }
  
  
//   console.log(maxAvgGrade([["soumya",50],["Puspa",80],["soumya",100],["soumya",200],["Jenny",70], ["Jenny",140]]))