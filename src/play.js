//Ugly numbers are numbers whose only prime factors are 2, 3 or 5. The sequence 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, … shows the first 11 ugly numbers. By convention, 1 is included.
//Given a number n, the task is to find n’th Ugly number.


const __getNthUglyNo = n =>{ 
    var ugly = [n]; 
    var i2 = 0, i3 = 0, i5 = 0; 
    var next_multiple_of_2 = 2; 
    var next_multiple_of_3 = 3; 
    var next_multiple_of_5 = 5; 
    var next_ugly_no = 1; 
  
    ugly[0] = 1; 

    for (let i=1; i<n; i++) 
    { 
       next_ugly_no = Math.min(next_multiple_of_2, 
                           Math.min(next_multiple_of_3, 
                               next_multiple_of_5)); 
       ugly[i] = next_ugly_no; 

       if (next_ugly_no == next_multiple_of_2) 
       { 
           i2 = i2+1; 
           next_multiple_of_2 = ugly[i2]*2; 
       } 
       if (next_ugly_no == next_multiple_of_3) 
       { 
           i3 = i3+1; 
           next_multiple_of_3 = ugly[i3]*3; 
       } 
       if (next_ugly_no == next_multiple_of_5) 
       { 
           i5 = i5+1; 
           next_multiple_of_5 = ugly[i5]*5; 
       } 
    }

    return next_ugly_no; 
} 
  
console.log("ulgy no: ", __getNthUglyNo(150));