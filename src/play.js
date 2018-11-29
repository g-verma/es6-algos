const __ugno = n =>{
    var ugly = [n];  //will store ugly numbers here
    var i2 = i3 = i5 = 0;
    var nm2 = 2,
        nm3 = 3,
        nm5 = 5;
    var nxtUgly = 1;
    ugly[0] = 1;  //initialised ulgy array with 1
    
    for(let i=1; i<n; i++){
        nxtUgly=Math.min(nm2, Math.min(nm3,nm5));
        ugly[i] = nxtUgly;

        if(nxtUgly == nm2){
            i2 += 1;
            nm2 = ugly[i2]*2;
        }
        if(nxtUgly == nm3){
            i3 += 1;
            nm3 = ugly[i3]*3;
        }
        if(nxtUgly == nm5){
            i5 += 1;
            nm5 = ugly[i5]*5;
        }
    }

    return nxtUgly;
}

console.log(" Ugly ---> ",__ugno(150));
