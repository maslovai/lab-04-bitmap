'use strict';
const fs = require('fs');

module.exports = (path)=>{
let bitmap = fs.readFileSync(path);
console.log(bitmap);

  for (var i = 54; i<=1074; i = i+4){
     bitmap[i] = 255 - bitmap[i];
     bitmap[i+1] = 255 - bitmap[i+1];
     bitmap[i+2] = 255 - bitmap[i+2];
    //  console.log(i);
   }
   console.log(bitmap);

fs.writeFile('../asset/newbitmap.bmp', bitmap);   
  return(bitmap);
}
