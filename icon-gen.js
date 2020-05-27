#!/usr/bin/env node
const TextToSVG = require('text-to-svg');
const textToSVG = TextToSVG.loadSync('fonts/Px437_IBM_EGA8.otf');
const fs = require('fs');
var list = ["// This file is auto-generated from icon-gen in the root directory"];
 
[
  ['[\u25A0]', 'checkbox-checked', 'custom-checkbox-indicator-icon-checked'],
  ['[', 'left-brace', ''],
  [']', 'right-brace', ''],
  ['[ ]', 'checkbox-unchecked', ''],
  [`\u253c\u2584`, 'grid', ''],
  ['(\u2022)', 'radio-checked', 'custom-radio-indicator-icon-checked'],
  ['( )', 'radio-unchecked', 'custom-radio-indicator-icon-unchecked']
].forEach(row => {
  let [str, name, bsname] = row;

  let props = {
    x: 0, y: 0, 
    fontSize: 16, anchor: 'top',
    attributes: { fill: '#bbbbbb'}
  };

  if(name == 'grid') {
    props.attributes.fill += '40';
  }
  const svg = textToSVG.getSVG(str, props);

  fs.writeFileSync(`${name}.svg`, svg);

  if(bsname) {
    list.push(`$${bsname}: url('data:image/svg+xml,${svg}');`);
  }
});

fs.writeFileSync(`v4.4.1/scss/_autogen.scss`, list.join('\n'));
