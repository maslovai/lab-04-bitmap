'use strict';
const fs = require('fs');

//inverting colors:

module.exports = (buffer, transformation)=>{
if (transformation ===  "invert" ){
  console.log('length:', buffer.colorPalette.length);
  for (var i = 54; i<=(buffer.colorPalette.length-4); i = i+4){
  buffer[i] = 255 - buffer[i];
  buffer[i+1] = 255 - buffer[i+1];
  buffer[i+2] = 255 - buffer[i+2];
 }
}

if (transformation === "randomize"){
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
  for (var i = 54; i<=buffer.colorPalette.length; i = i+4){
    buffer[i] = getRandomArbitrary(0, 255);
    buffer[i+1] = getRandomArbitrary(0, 255);
    buffer[i+2] = getRandomArbitrary(0, 255);
  }
}

if (transformation === "rotate"){
  let temp;
  let counter = 0;
  for (var i = 1078; i<=6078; i++){
      temp = buffer[i];
      buffer[i] = buffer[11078-counter];
      buffer[11078-counter]=temp;
      counter++;
   }
}

if (transformation === "frame"){
      let color = buffer[1078];
      //top an bottom
      for (var i=0; i<=99; i++){
        buffer[1078+i] = color;
        buffer[1178+i] = color;
        buffer[1278+i] = color;
        buffer[10978+i]=color;
        buffer[10878+i] = color;
        buffer[10778+i] =color;
      }
      //sides
      for (var i = 0; i<=94; i++){
        buffer[1378 + i*100] = color;
        buffer[1379 + i*100] = color;
        buffer[1380 + i*100] = color;
        buffer[1478 + i*100] = color;
        buffer[1477 + i*100] = color;
        buffer[1476 + i*100] = color;
      }
 }
return buffer;
}
