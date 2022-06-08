const fs = require('fs/promises');
const path = require('path');
let lis = [];
fs.readdir(path.join('C:','/','Users','segad','Desktop')).then(files => {
    const img = files.filter(file => true);

    console.log(img);
    console.log(`repete o 5=>(${img[5]})`);
    console.log("tamanho=>"+ img.length);
})