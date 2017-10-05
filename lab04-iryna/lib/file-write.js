'use strict';
const fs = require('fs');

module.exports = (fileName, newBuffer)=>{
  console.log('in write-file:', fileName, newBuffer);
  fs.writeFileSync(fileName, newBuffer);
    return;
}
