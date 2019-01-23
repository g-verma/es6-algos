
// Solution 2
const __av = scores =>{
  var score = {};
  if(scores.length == 0){
    return 0;
  }
  
  for(var i=0; i<scores.length; i++){
  
    var key = scores[0+i][0];
    var value = parseInt(scores[0+i][1])
  
    if(score[key]){
      score[key]['total'] += value ;
      score[key]['subcount']++
      score[key]['avg'] = (score[key]['total']/score[key]['subcount']);
    }
    else{
      score[key] = {subcount:"", total:"",avg:""};
      score[key]['total'] = value;
      score[key]['subcount'] = 1;
      score[key]['avg'] = value;
    }
  
  }
  
   console.log(score);
  var max = 0;
  for(var i in score){
    if(score[i].avg>max){
      max = score[i].avg;
    }
  }
  
  return max;
}


var pp = [["jerry","65"],["bob","90"],["jerry","23"],["eric","23"]];
console.log(' avg is ',__av(pp));
// Solution 2 ends here
