'use strict';
const fs = require('fs');


module.exports = (path)=>{

 let bitmap = fs.readFileSync(path);

return bitmap;
}
