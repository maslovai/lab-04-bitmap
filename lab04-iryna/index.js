'use strict';
const readFile = require('../lab04-iryna/lib/file-read.js');
const metaConstructor = require('../lab04-iryna/lib/constructor.js');
const transformFile = require('../lab04-iryna/lib/transform.js');
const writeFile = require('../lab04-iryna/lib/file-write.js');

const transformations = ['invert', 'rotate', 'randomize','frame'];
const cliArgs = process.argv;

let oldFile = process.argv[2];
let newFile = process.argv[3];
let transformation = process.argv[4];


let newBitmap = readFile(`../asset/${oldFile}`, function(data){
  new metaConstructor(data);
});

console.log(newBitmap);
transformFile(transformation, newBitmap, function(){

});
// console.log('buffer from transform: ', bufferHolder);


let newBuffer = Buffer.concat([newBitmap.BitmapHeader, newBitmap.DIBHeader, newBitmap.colorPalette, newBitmap.pixelArray], newBitmap.length);
writeFile(`../asset/${newFile}`, newBuffer);
