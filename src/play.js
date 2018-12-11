const __th = (n, from_rod, to_rod, aux_rod)  => {

    if (n == 1) 
    {
     console.log("Move disk 1 from " + from_rod, to_rod); 
        return; 
    } 
    
    __th(n-1, from_rod, aux_rod, to_rod); 
    console.log("Move disk from rod to rod ", n, from_rod, to_rod); 
    
    __th(n-1, aux_rod, to_rod, from_rod); 
} 

var n = 3;
console.log(__th(n, 'A', 'C', 'B'));
    

  
