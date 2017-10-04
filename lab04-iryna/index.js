'use strict';
const readFile = require('../lab04-iryna/lib/file-read.js');
const metaConstructor = require('../lab04-iryna/lib/constructor.js');
const transformFile = require('../lab04-iryna/lib/transform.js');
const writeFile = require('../lab04-iryna/lib/file-write.js');

const transformations = ['invert', 'rotate', 'randomize'];
const cliArgs = process.argv;

let oldFile = process.argv[2];
let newFile = process.argv[3];
let transformation = process.argv[4];

let buffer = readFile(`../asset/${oldFile}`);
// console.log('buffer from read: ', buffer.slice(54, 70));

// metaConstructor(buffer);
let  newBuff = transformFile(buffer,transformation);
// console.log('buffer from transform: ', buffer.slice(54, 70));


// let newBuffer = new Buffer.concat[buffer.BitmapHeader, buffer.DIBHeader, buffer.colorPalette, buffer.pixelArray, buffer.length]
writeFile(`../asset/${newFile}`, newBuff);
