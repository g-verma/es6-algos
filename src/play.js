var pp = new Promise((resolve,reject)=>{
    setTimeout(() =>{
        resolve('-->');
    }, 300);
});

pp.then(value=>{return console.log(value + ' hmm')});

console.log(pp);
