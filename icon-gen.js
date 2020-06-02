#!/usr/bin/env node
const TextToSVG = require('text-to-svg');
const textToSVG = TextToSVG.loadSync('fonts/Px437_IBM_EGA8.otf');
const fs = require('fs');
const path = (process.argv[2] || '.').replace(/\/$/, '');
var list = ["// This file is auto-generated from icon-gen in the root directory"];
 
const variationList = [
  ['black', '#000000'],
  ['grayLight', '#bbbbbb']
];

[
  ['[', 'left-brace'],
  [']', 'right-brace'],
  ['[', 'left-brace'],
  ['-', 'hyphen'],
  ['\u25Bc', 'arrow-down'],
  ['\u2591', 'shade-25'],
  ['\u2592', 'shade-50'],
  ['\u2593', 'shade-75'],

  ['[\u25A0]', 'checkbox-checked'],
  ['[ ]', 'checkbox-unchecked'],
  [`\u253c\u2584`, 'grid'],
  ['(\u2022)', 'radio-checked'],
  ['( )', 'radio-unchecked']
].forEach(row => {
  let [str, string] = row;

  for(const [name, hex] of variationList) {
    let props = {
      x: 0, y: 0, 
      fontSize: 16, anchor: 'top',
      attributes: {fill: hex}
    };

    if (row.length > 3) {
      props = Object.assign(props, row[3]);
    }

    if(name == 'grid') {
      props.attributes.fill += '40';
    }

    const 
      svg = textToSVG.getSVG(str, props),
      fullpath = `${path}/${string}-${name}.svg`

    fs.writeFileSync(fullpath, svg);

    console.log(fullpath);
  }

  //if(bsname) {
  //  list.push(`$${bsname}: url('data:image/svg+xml,${svg}');`);
  //}
});

//fs.writeFileSync(`v4.4.1/scss/_autogen.scss`, list.join('\n'));
