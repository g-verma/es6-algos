


// var arr = [];
// var istr = "abcdaaddb";
// var rmdup = [];


// istr.split("").forEach(function(item){
//     var tempobj ={
//         char: item,
//         count: 1
//     }

//     var tempindex = rmdup.indexOf(item);

//     if(tempindex == -1){
//         rmdup.push(item);
//         arr.push(tempobj);
//     }else{
//         arr[tempindex]["count"] = arr[tempindex]["count"] + 1;
//     }

// })

// var str = "";
// arr.forEach(function(obj){
//     str = str + obj['char'] + obj['count'];
// })

// console.log("dupp: ",str);

const __rrd = str => {
    var ostr = str.split('');

    var count = 1;
/*
    for(var i=1; i < ostr.length; i++ ){
    
        for(var j=0; j < count; j++){
            
            if(ostr[i] == ostr[j]) 
                break;
        }


        if(j === count){
            ostr[count] = ostr[i];
            ++count;
        }
    
    }
    */

    var obj = {};
    for(var i=0; i < ostr.length; i++ ){
        obj[ostr[i]] = "--";
    }

    // console.log(Object.keys(obj));
    console.log(obj);
    ostr.length = count;
    return Object.keys(obj);
}

var ystr = "dssss"
console.log(__rrd(ystr));




