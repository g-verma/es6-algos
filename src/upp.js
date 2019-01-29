// working second smallest
function secondSmallest(arr){

  if(arr.length<=1){
      return 0;
  }
  var first = 9999, second = 9999;
  for(var i=0;i<arr.length;i++){
      if(arr[i]<first){
          second =  first;
          first = arr[i];
      }
      else if(arr[i]<second && arr[i]!=first){
          second = arr[i];
      }
  }
  return second;
}



//median
const __median = (inputArr1, inputArr2) =>{
    let mergeArr = [...inputArr1, ...inputArr2];
    let sortedArr = mergeArr.sort((a,b)=> a-b);
  
    console.log(sortedArr);
    if(sortedArr.length % 2 == 0) {
      let mid1 = sortedArr.length/2;
      let mid2 = mid1 + 1;
      let output = (sortedArr[mid1]+sortedArr[mid2])/2;
      return output;
    }else {
      let mid = Math.floor(sortedArr.length/2)
      return sortedArr[mid];
    }
  }
  
  var k1= [2,3,5];
  var k2 = [1,4,6];
  
  console.log(__median(k1,k2));
  



// sec small
const __secondSmallest = inputArr => {
    if(inputArr.length <=1) return 0;
  
    let [first,second] = [inputArr[0], inputArr[0]];
  
    for(let x of inputArr){
      if(x < second){
        if(x < first){
          second = first;
          first = x;
        }else{
          second = x;
        }
      }
    }
    return second;
  }
  
  k = [20,70,50,40,2,1];
  console.log(__secondSmallest(k))
  



  //max avg
  const __maxAvg = inputArr =>{
    let avg = [];
  
    for(let x of inputArr){
      let [total,subCount] = [0,0];
      for(let y of x){
        total += y;
        subCount++;
      }
  
      avg.push(total/subCount);
    }
    return Math.max(...avg);
  }
  
  k=[[10,20,30],[-40,-20,10,30],[80]];
  console.log(__maxAvg(k));





  //max avg with names
  const __avgMax = scores =>{
    let score = {};
    if(scores.length == 0) return 0;
   
    for(let x=0; x<scores.length; x++){
      let key = scores[0+x][0];
      let value = parseInt(scores[0+x][1]);
  
      if(score[key]){
        score[key]['total'] += value;
        score[key]['subcount']++;
        score[key]['avg'] = (score[key]['total']/score[key]['subcount']);
      }else {
        score[key] = {subcount:'', total:'', avg:''};
        score[key]['total'] = value;
        score[key]['subcount'] = 1;
        score[key]['avg'] = value;
      }
    }
  
    let max = 0;
    // for(let z in score){
    //   score[z].avg > max ? max = score[z].avg : max ;
    // }

    score.forEach(item=>{   score[item].avg >max ? max = score[item].avg : max;} )
    return max;
  }
  
  var pp = [["jerry","65"],["bob","90"],["jerry","23"],["eric","23"]];
  console.log(__avgMax(pp));
  
  
// above ques  
// ************************************













// 2. Return the second smallest element in the array x 
// Solution 1         Time complexity is O(n), is directly proportional to its size and will grow linearly.
const secondSmallest = inputArr =>{
    const sortArray = arr => {
      if(arr.length < 2) return arr;
      
      let counter = arr[0];
      let ls = [];
      let gr = [];
      
      for(let x=1; x<arr.length; x++){
          arr[x]<counter ? ls.push(arr[x]) : gr.push(arr[x]);
      }
      let sortedArr = [...sortArray(ls), counter, ...sortArray(gr)];
      
      // removing duplicates from the sorted array
      let removeDup = arr => arr.filter((v,i) => arr.indexOf(v) === i);
      let uniqueArr = removeDup(sortedArr);
      return uniqueArr;
    }
      // returning second Smallest
      return (inputArr<2) ? 0 : sortArray(inputArr)[1];
  }
  
  var testArrays  = [-44,-44,-4,-3,22,5,-11,5,89,0,22]; 
  console.log(secondSmallest(testArrays));  // output is : -11
  // *** solution 1 ends here ***
  
  // Solution 2
  const secondSmallest = arr =>{
    if (arr.length < 2) return 0;
    
  
    let first = arr[0];
    let second = arr[0];
  
    for (let x = 1; x < arr.length; x++) {
      if (arr[x] < second) {
        if (arr[x] < first) {
          second = first;
          first = arr[x];
        } else {
          second = arr[x];
        }
      }
      }
   
   return second;
  }
  
  let k = [40,7,2,800,5];
  console.log(secondSmallest(k))
  // ***  Solution 2 ends here ***
  
  // 3. Best Average Grade  
  // **  Given a list of student test scores, find the best average grade.
  // **  Each student may have more than one test score in the list.
  // Solution 1       Time Complexity is O(n^2), as code is executed n number of times for all the elements inside loop
  const __avg = score =>{
    let scores = [];
    
    for(let y=0; y<score.length; y++){
      let total = 0;
      let max = 0;
      let min = 999;
      let len1 = score[y].length;
      let studArr = score[y];
      
      for(var x=0; x<len1; x++){
        let mark = studArr[x];
        total += mark;
        max < mark ? max=mark :
        min > mark ? min = mark : mark;
      }
      scores.push(total/len1);
    }
    
    
    let maxAvg= 0;
    for(let k in scores){
        scores[k] > maxAvg ? maxAvg=scores[k] : maxAvg;
    }
    
    return maxAvg;
  }
    
  var score = [[10,20,30], [40,50,60], [70,80,90,100]];  // Students have more than one score
  console.log(__avg(score));
  // *** Solution 1 ends here ***
  
  // Solution 2
  const __avgMax = scores =>{
    let score = {};
    if(scores.length == 0)
      return 0;
   
    for(let idx=0; idx<scores.length; idx++){
      let key = scores[0+idx][0];
      let value = parseInt(scores[0+idx][1])
          
      if(score[key]){
        score[key]['total'] +=  value ;
        score[key]['subcount']++;
        score[key]['avg'] = (score[key]['total']/score[key]['subcount']);
      }
      else{
        score[key] = {subcount:"", total:"",avg:""};
        score[key]['total'] = value;
        score[key]['subcount'] = 1;
        score[key]['avg'] = value;
      }
    
    }
    
    // console.log(score);
    var max = 0;
    for(let k in score){
          score[k].avg>max ? max=score[k].avg : max;
    }
    
    return max;
  }
  
  var pp = [["jerry","65"],["bob","90"],["jerry","23"],["eric","23"]];
  console.log(__avgMax(pp));
  
  // Solution 2 ends here
  
  
  // 4. Median in two sorted and non sorted arrays with same size
  // Solution 1            Time complexity is O(n), is directly proportional to its size and will grow linearly.
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
  // *** Solution 1 Ends here ***
  
  // Solution 2 with different sizes
  const __median = (arr1, arr2) =>{
    let mergeArr = [...arr1, ...arr2];
    let sortedArr = mergeArr.sort((a,b)=>a-b);
      
    if(sortedArr.length % 2 == 0){
      let mid1 = sortedArr.length/2
      let mid2 = mid1 + 1;
      let output = (sortedArr[mid1] + sortedArr[mid2])/2;
      return output;
    }else{
      let mid = Math.floor(sortedArr.length/2);
      return sortedArr[mid];
    }
    
  }
  
  var k1= [2,3,5,6,7,9,10];
  var k2 = [1,8,11,12,13,14];
  
  console.log(__median(k1,k2));
  // Solution 2 ends here
  
  
  
  // 5. Binary Search
  // Solution 1       Time complexity is O(log n), as it execution will reduce into half after subsequent levels.
  const __bsearch = (arr, el) =>{
    arr.sort((a,b) =>{  return a-b; });
    let lowindex = 0;
    let highindex = arr.length - 1;
    let pos;
    let flag = false;
  
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
    
    return flag ? true : false;  
  }
  
  var barr = [5, 8, 1, 2, 15, 3, 200];
  console.log(__bsearch(barr, 1));
  // **** Solution 1 ends here ***
  
  // 6. Grouping words as per anagram
  // Solution 1          Time complexity is O(n), is directly proportional to its size and will grow linearly.
  const __anagram = inputArray => {
    let resObj = {};   // an object to store all the words after sorting
    inputArray.forEach( item =>{
        let value = item.split('').sort().join('');
        return resObj[value] ? resObj[value].push(item) : resObj[value] = [item];
    });
    return resObj;
  }
  let str = ['cat', 'dog', 'tac', 'god' , 'act','xyz'];
  console.log(String(Object.values(__anagram(str))));
  
   // *** Solution 1 ends here ***
  
   // 7. Staircase problem with max step 1,2,3
  // Solution 1       Time Complexity is n*(log n)
  const __climb = steps =>{
    return (steps==1 || steps==0 ) ? 1 :
      (steps==2) ? 2: 
      __climb(steps-1) + __climb(steps-2) + __climb(steps-3);
  }
  console.log("ways to climb: ", __climb(3));  //output : 4
  // *** Solution 1 ends here ***
  
  // Solution 2  Using dynamic programming     complexity is O(n)
  const __waysToClimb = steps =>{   
    const result = [1,1,2];  
    for(let count = 3; count <= steps; count++){
        result[count] = result[count-1] + result[count-2] + result[count-3];
    }
    return result[steps];
  }
  console.log('ways to climb: ', __waysToClimb(3));  // input 3, output 4
  // *** Solution 2 ends here ***
  
  
  // Anagaram of a word is palindrome or not
  const __angagramPali = str =>{
    let obj = {};
    let count = 0;
  
    for(var idx=0;idx<str.length; idx++){
        obj[str[idx]] ? obj[str[idx]]++ : obj[str[idx]]=1;
    }
    //console.log(obj);
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
  
  var inputStr = 'maaszdam';
  console.log(__angagramPali(inputStr));
  const __angagramPali = str =>{
    let obj = {};
    let count = 0;
  
    for(var idx=0;idx<str.length; idx++){
        obj[str[idx]] ? obj[str[idx]]++ : obj[str[idx]]=1;
    }
    //console.log(obj);
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
  
  var inputStr = 'maaszdam';
  console.log(__angagramPali(inputStr));
  
  