'use strict';

const config = {
  plugins: [
    { cleanupListOfValues: true },
    { removeDimensions: true },
    { removeElementsByAttr: true },
    { removeRasterImages: true },
    { removeStyleElement: true },
    { removeTitle: true },
    { removeViewBox: true },
    { removeXMLNS: true },
    { removeXMLProcInst: true },
    { sortAttrs: true },
    { transformsWithOnePath: true },
    {
      removeAttrs: {
        attrs: 'fill'
      }
    }
  ]
};

const fs = require('fs');
const path = require('path');
const glob = require('glob');
const SVGO = new (require('svgo'))(config);
const camelCase = require('camelcase');

function generateComponentBody(filePath) {
  const name = path.basename(filePath, '.svg');
  const iconName = name + 'Icon';
  fs.readFile(filePath, 'utf8', (err, data) => {

    if (err) { throw err; }

    SVGO.optimize(data, result => {
      const svg = prepareSVGForReact(result.data);

      const template =
`import React from 'react';
import IconBase from '../IconBase';

export default (props) =>
  <IconBase viewBox="0 0 ${result.info.width} ${result.info.height}" { ...props }>
    <g>${svg}</g>
  </IconBase>
`;
      fs.writeFile(path.join(__dirname, `src/rebel-lib/${iconName}.js`), template,
        () => console.log(`Component: ${iconName} was generated`));
    })
  });
  return name;
}

function prepareSVGForReact(svg) {
  const svgContent = svg.match(/<svg[^>]+>([\W\w]*)<\/svg>/)[1];
  return svgContent.replace(/[\w]+[-:][\w]+(?=[=])/g, atr => camelCase(atr));
}

function getIconName(name) {
  if (name.charAt(1) === name.charAt(1).toUpperCase()) {
    return name.toLowerCase();
  } else {
    return name.charAt(0).toLowerCase() + name.slice(1);
  }
}

// Generate components
glob(path.join(__dirname, '/icons-src/*.svg'), (err, icons) => {
  if (err) { console.error(err) }

  const names = icons.map(filePath => generateComponentBody(filePath));

  const listOfIcons = names.map(name => `  ${getIconName(name)}: '${name}'`).join(',\n');
  const template = `export default {\n${listOfIcons}\n};\n`;

  fs.writeFile(path.join(__dirname, `src/rebel-lib.js`), template,
    () => console.log('==== List of Icons was generated ===='));
});

