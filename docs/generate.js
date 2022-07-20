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
    ]),
    decor.linkKeywords({
      linear2: '#affineplanelinear2',
      path2: '#affineplanepath2',
      poly2: '#affineplanepoly2',
      point2: '#affineplanepoint2',
      proj2: '#affineplaneproj2',
      size2: '#affineplanesize2',
      tran2: '#affineplanetran2',
      vector2: '#affineplanevector2',
      vector3: '#affineplanevector3',
    }),
    decor.italicSingles(),
    decor.backTopLinks(),
    decor.toc()
  ]
})
