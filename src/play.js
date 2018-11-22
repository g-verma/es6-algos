const __stc = num =>{
    const mxb = num;
    const mxf = num;
    var strl = [];
    for(var i = 0; i<mxf; i++){
        let skpb = mxb-i-1;
        let strbl = [];
        for(var j=0; j<mxb; j++){
           if(skpb>0) 
                strbl.push(' ')
           else
                strbl.push('#')
        skpb--
        }
        strl.push(strbl)
    }
    console.log(strl);
    for(let k of strl){
        console.log(k.join(''))
    }

    return;
}

var nums = 5;
console.log(__stc(nums))


//pyramd
function printN(n) {
    var hash = '';
  
    for (var i = 0; i <= n; i++) {
      hash += '#';
      console.log(hash);
    }
  }
  
  printN(6);
  
//strcs 
  function staircase(n) {
    for (let i = 1; i <= n; i++) {
      console.log(' '.repeat(n - i) + '#'.repeat(i));
    }
  }
  
  staircase(8);
  
  
  //strcase with recursion
  function staircase(n, string) {
    string = string || '';
    if (n > 0) {
      string += "#";
      console.log(string);
      this.staircase(n - 1, string);
    }
  }
  
  
  
  function chestBoard(size) {
    var board = '';
    for (var y = 0; y < size; y++) {
      for (var x = 0; x < size; x++) {
        if ((x + y) % 2 === 0)
          board += ' ';
        else
          board += '#';
      }
      board += '\n';
    }
    console.log(board);
  }
chestBoard(8);
  
  