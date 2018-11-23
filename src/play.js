
//Count the subarrays having product less than k
const __sumLessK = (a, k)  =>{
    p = 1, 
    res = 0,
    start = 0,
    end =0;

    for (start ; end < a.length ; end++) { 
  
        p *= a[end]; 
          
        while (start < end && p >= k)  
            p /= a[start++];         
         
        if (p < k) { 
           var len = end-start+1; 
            res += len; 
        } 
    } 
  
    return res; 
} 
var arrin = [1, 2, 3, 4];   //output is 7
console.log("product of sum less than k is:", __sumLessK(arrin, 10));


// const __maxStrcase = num => {
//     var test;

//     while(test--){
//         var n, ans = 0, curr =1;
//         n = num;
//         while(curr <= n){
//             n -=curr;
//             curr++;
//             ans++;
//         }

//         console.log("hshsh", ans)
//     }

//     return 0;
// }

// __maxStrcase(5);


