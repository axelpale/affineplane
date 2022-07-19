const yamdog = require('yamdog')
const path = require('path')
const version = require('../package.json').version
const decor = yamdog.decorators

yamdog.generate({
  // Where to start collecting comment blocks
  entry: path.resolve(__dirname, '../'),
  // Where to generate
  output: path.resolve(__dirname, 'API.md'),
  // Earmark; include blocks that begin with this name.
  earmark: 'affineplane',
  // Main title of the document
  title: 'Affineplane API Documentation v' + version,
  // Introduction; the initial paragraph
  intro: 'Welcome to affineplane API reference documentation.',
  // Styling; decorate the docs
  decorators: [
    decor.aliases(),
    decor.alphabetical(),
    decor.linkNames(),
    decor.replace([
      {
        // Normalize parameters title
        pattern: /^param(?:eter)?s?:?/i,
        replacement: '**Parameters:**'
      },
      {
        // Normalize return title
        pattern: /^returns?:?/i,
        replacement: '**Returns:**'
      },
      {
        // Pretty array literals
        pattern: /(^|\s+)\[([\w,: ]*)\]($|\s+)/,
        replacement: '$1`[$2]`$3'
      },
      {
        // Pretty object literals
        pattern: /(^|\s+){([\w,: ]*)}($|\s+)/,
        replacement: '$1`{$2}`$3'
      },
      {
        // Link linear2
        pattern: /(^|\s+)linear2($|\W+)/,
        replacement: '$1[linear2](#affineplanelinear2)$2'
      },
      {
        // Link path2
        pattern: /(^|\s+)path2($|\W+)/,
        replacement: '$1[path2](#affineplanepath2)$2'
      },
      {
        // Link poly2
        pattern: /(^|\s+)poly2($|\W+)/,
        replacement: '$1[poly2](#affineplanepoly2)$2'
      },
      {
        // Link point2
        pattern: /(^|\s+)point2($|\W+)/,
        replacement: '$1[point2](#affineplanepoint2)$2'
      },
      {
        // Link proj2
        pattern: /(^|\s+)proj2($|\W+)/,
        replacement: '$1[proj2](#affineplaneproj2)$2'
      },
      {
        // Link size2
        pattern: /(^|\s+)size2($|\W+)/,
        replacement: '$1[size2](#affineplanesize2)$2'
      },
      {
        // Link tran2
        pattern: /(^|\s+)tran2($|\W+)/,
        replacement: '$1[tran2](#affineplanetran2)$2'
      },
      {
        // Link vector2
        pattern: /(^|\s+)vector2($|\W+)/,
        replacement: '$1[vector2](#affineplanevector2)$2'
      },
      {
        // Link vector3
        pattern: /(^|\s+)vector3($|\W+)/,
        replacement: '$1[vector3](#affineplanevector3)$2'
      },
    ]),
    decor.italicSingles(),
    decor.backTopLinks(),
    decor.toc()
  ]
})
