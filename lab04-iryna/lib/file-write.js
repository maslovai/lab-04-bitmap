'use strict';
const fs = require('fs');

module.export = (fileName, newBuffer)=>{
  fs.writeFileSync('../asset/'+filename, newBuffer);
    return;
}
