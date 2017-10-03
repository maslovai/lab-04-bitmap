'use strict';
const fs = require('fs');

//inverting colors:

module.exports = (colorPalette)=>{

  for (var i = 54; i<=1074; i = i+4){
  colorPalette[i] = 255 - colorPalette[i];
  colorPalette[i+1] = 255 - colorPalette[i+1];
  colorPalette[i+2] = 255 - colorPalette[i+2];
  return this;
}

}
