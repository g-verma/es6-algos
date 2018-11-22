const __ffs = n =>{
    if(n == 1 || n == 0)
        return 1;
    else if(n == 2)
        return 2; 
    else {
        var output = __ffs(n-3) + __ffs(n-2) + __ffs(n-1);
        return output;
    }
}

console.log("ways are:", __ffs(4));