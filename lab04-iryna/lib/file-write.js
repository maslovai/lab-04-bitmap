'use strict';
const fs = require('fs');

module.exports = (fileName, newBuffer)=>{
  fs.writeFileSync(fileName, newBuffer);
    return;
}
