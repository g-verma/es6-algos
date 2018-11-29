//ugly number with while

const __isUgly = num => {
    var arr = [2, 3, 5];
    
    arr.forEach( prime => {
        while (num && num % prime === 0) {
            num /= prime;    // num = num/prime
        }
    });
    
    return num === 1;
}

console.log("ugly is", __isUgly(150))
