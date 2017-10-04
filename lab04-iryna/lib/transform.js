'use strict';
const fs = require('fs');

//inverting colors:

module.exports = (buffer, transformation)=>{
if (transformation ===  "invert" ){
  for (var i = 54; i<=1074; i = i+4){
  buffer[i] = 255 - buffer[i];
  buffer[i+1] = 255 - buffer[i+1];
  buffer[i+2] = 255 - buffer[i+2];
}
}

if (transformation === "randomize"){
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
  for (var i = 54; i<=1074; i = i+4){
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

return buffer;
}
