const seprator = msg => {
    if(msg === undefined)
        { msg = " ";}    
    return console.log("--------------- " + msg + " ----------------");
};


const __maxSum = (arr) =>{
    var currentSum = 0;
    var globalMax = arr[0];

    for(let i=0; i<arr.length; i++){
        currentSum = arr[i] > currentSum + arr[i] ? arr[i] : currentSum + arr[i];
        globalMax = globalMax > currentSum ? globalMax : currentSum;
    }

    return globalMax;
}

var karr = [1,2,-11,4,7,-2,3];
console.log("*** contiguous array sum: ", __maxSum(karr));

seprator(" diagonal ");

const __matrix = arr =>{
    var len = arr.length;
    var mlen = arr[0].length;
    var output = " ";
    for(var i = 0; i < len; i++){
        j=0;
        k=j;



        j-1;
        k+1;

    }

    for(var j = 0; j < mlen; j++){

    }

    return output;

};

var inputMatrix = [[1,2,3],[4,5,6],[7,8,9]]
console.log(" -- ", __matrix(inputMatrix));
