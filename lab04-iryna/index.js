'use strict';
const readFile = require('../lab04-iryna/lib/file-read.js');
const metaConstructor = require('../lab04-iryna/lib/constractor.js');
const transformFile = require('../lab04-iryna/lib/transform.js');
const writeFile = require('../lab04-iryna/lib/file-write.js');

const path = '../asset/';

// readFile(path);
// metaConstruct();
// transformFile();
//concat new buffer;
// writeFile();

let buffer = (readFile('../asset/bitmap0.bmp'));
console.log('buffer from read: ', buffer);

newBuffObj = metaConstructor(buffer);

transformFile(buffer.colorPalette);

let newBuffer = new Buffer.concat[buffer.BitmapHeader, buffer.DIBHeader, buffer.colorPalette, buffer.pixelArray, buffer.length]
writeFile(path + 'inverted.bmp', newBuffer);
