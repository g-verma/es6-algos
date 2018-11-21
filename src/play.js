// sorted bbs
const __bsrt = arr =>{
    var done = true;

    for(var i=0; i< arr.length; i++){
      for(var j=0; j<arr.length; j++){       
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

var inparr = [188, 5, 8, 1, 2, 15, 3];
console.log("sorted Bs: ", __bsrt(inparr));