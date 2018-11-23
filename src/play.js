
const __maxStrcase = num => {
    var test;

    while(test--){
        var n, ans = 0, curr =1;
        n = num;
        while(curr <= n){
            n -=curr;
            curr++;
            ans++;
        }

        console.log("hshsh", ans)
    }

    return 0;
}

__maxStrcase(5);


