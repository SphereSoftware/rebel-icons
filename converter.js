'use strict';

var config = {
  full: true,
  plugins: [
    { removeDoctype: true },
    { removeXMLProcInst: true },
    { removeComments: true },
    { removeMetadata: true },
    { removeXMLNS: true },
    { removeEditorsNSData: true },
    { cleanupAttrs: true },
    { minifyStyles: true },
    { convertStyleToAttrs: true },
    { cleanupIDs: true },
    { removeRasterImages: true },
    { removeUselessDefs: true },
    { cleanupNumericValues: true },
    { cleanupListOfValues: true },
    { convertColors: true },
    { removeUnknownsAndDefaults: true },
    { removeNonInheritableGroupAttrs: true },
    { removeUselessStrokeAndFill: true },
    { removeViewBox: true },
    { cleanupEnableBackground: true },
    { removeHiddenElems: true },
    { removeEmptyText: true },
    { convertShapeToPath: true },
    { moveElemsAttrsToGroup: true },
    { moveGroupAttrsToElems: true },
    { collapseGroups: true },
    { convertPathData: true },
    { convertTransform: true },
    { removeEmptyAttrs: true },
    { removeEmptyContainers: true },
    { mergePaths: true },
    { removeUnusedNS: true },
    { transformsWithOnePath: true },
    { sortAttrs: true },
    { removeTitle: true },
    { removeDesc: true },
    { removeDimensions: true },
    { removeAttrs: true },
    { removeElementsByAttr: true },
    { removeStyleElement: true },
    //  { addClassesToSVGElement: true },
    //  { addAttributesToSVGElement: true },
    {
      removeAttrs: {
        attrs: '.*:(fill|stroke)'
      }
    }
  ],
}

const FS = require('fs')
const PATH = require('path')
const GLOB = require('glob')
const SVGO = new (require('./node_modules/svgo/lib/svgo'))(config)

function generateComponentBody(filePath) {
  const name = `${PATH.basename(filePath, '.svg')}Icon`
  FS.readFile(filePath, 'utf8', (err, data) => {

    if (err) { throw err; }

    SVGO.optimize(data, (result) => {
      result.data = result.data.replace(/(<svg([^>]+)>)/ig, '').replace('</svg>', '')

      const template = `
import React from 'react'
import IconBase from './IconBase'

export default function ${name}(props) {
  return (
    <IconBase viewBox="0 0 ${result.info.width} ${result.info.height}" {...props}>
      <g>${result.data}</g>
    </IconBase>
  );
}
`

    FS.writeFileSync(PATH.join(__dirname, `src/${name}.js`), template, 'utf-8');
    console.log(`Component: ${name}: was generated`);
    })
  })
  return name
}

// Generate components
GLOB(PATH.join(__dirname, '.') + '/icons/svg/*.svg', (err, icons) => {
  var names = icons.map((filepath) => {
    return generateComponentBody(filepath)
  });

  const indexFile = names.map((name) => {
    return `export ${name} from './${name}';`
  }).join('\n') + '\n';

  FS.writeFileSync(PATH.join(__dirname, `src/index.js`), `'use babel';\n\n${indexFile}`, 'utf-8');
});
console.log(' ====== Index File was generated ======');
