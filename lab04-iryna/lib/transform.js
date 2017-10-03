'use strict';
const fs = require('fs');

//inverting colors:

module.exports = (buffer)=>{
  for (var i = 54; i<=1074; i = i+4){
  buffer[i] = 255 - buffer[i];
  buffer[i+1] = 255 - buffer[i+1];
  buffer[i+2] = 255 - buffer[i+2];
}
return;
}
