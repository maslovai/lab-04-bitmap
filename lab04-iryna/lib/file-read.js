'use strict';
const fs = require('fs');


module.exports = (path)=>{

 let bitmap = fs.readFileSync(path);

return bitmap;
}




// Buffer.Constractor = function(bitmap) {
//  this.BitmapHeader = bitmap.slice(0, 14);
//  this.DIBHeader = bitmap.slice(14, 54);
//  this.colorPalette = bitmap.slice(54, 1078);
//  this.pixelArray = bitmap.slice(1078);
//  this.length = bitmap.length;
// };
