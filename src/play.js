const __max = (a,b) =>{
    return (a>b)?a:b;  //returning maximum of two integers
}

const __eggDrop = (n,k)=>{
    var ef = [[n+1],[k+1]];
    var res;
    var i,j,x;

    for(i = 1; i <=n; i++){
        ef[[i],[1]] = 1;
        ef[[i],[0]] = 0;
    }

    for(j = 1; j <= k; j++){
        ef[[1],[j]]=j;

    }

    for(i=2; i<=n; i++){
        for(j=2; j<=k; j++){

            ef[[i],[j]] = Number.MAX_SAFE_INTEGER;
            
            for(x=1; x<=j; x++){
                res = 1 + __max(ef[[i-1],[x-1]], ef[[i],[j-x]]);
                if(res < ef[[i],[j]]){
                    ef[[i],[j]] = res;
                }
            }
        }
    }

    return ef[[n],[k]];

}

var n = 2, k = 36;    // for n:2   k:36   output is 8
console.log("egg droppped: ", __eggDrop(n,k));   //output is 4






const __twoEggDrop = k =>{ 
   return Math.ceil((-1.0 + Math.sqrt(1 + 8*k))/2.0); 
} 

var k = 100; 
console.log("two egg drops", __twoEggDrop(k));