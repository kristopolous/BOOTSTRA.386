#!/usr/bin/env node
const TextToSVG = require('text-to-svg');
const textToSVG = TextToSVG.loadSync('fonts/Px437_IBM_EGA8.otf');
const fs = require('fs');
 
[
  ['[\u25A0]', 'checkbox-checked'],
  ['[ ]', 'checkbox-unchecked'],
  ['(\u2022)', 'radio-checked'],
  ['( )', 'radio-unchecked']
].forEach(row => {
  let [str, name] = row;
  const options = {x: 0, y: 0, fontSize: 18, anchor: 'top'}
  const svg = textToSVG.getSVG(str, options);
  fs.writeFile(`${name}.svg`, svg, () => console.log(name + " written"));
});
