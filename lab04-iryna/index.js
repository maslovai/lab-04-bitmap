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

let buffer = readFile(`../asset/${oldFile}`);
// console.log('buffer from read: ', buffer);

const newBitmap = new metaConstructor(buffer);

let bufferHolder = transformFile(newBitmap,transformation);
console.log('buffer from transform: ', bufferHolder);

// console.log('from index newBitmap: ',newBitmap);

let newBuffer = Buffer.concat([newBitmap.BitmapHeader, newBitmap.DIBHeader, newBitmap.colorPalette, newBitmap.pixelArray], newBitmap.length);
writeFile(`../asset/${newFile}`, newBuffer);
