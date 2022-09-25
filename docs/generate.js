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
  intro: 'Welcome to affineplane API reference documentation. ' +
    'These docs are generated with ' +
    '[yamdog](https://axelpale.github.io/yamdog/).\n\n' +
    'See also [Usage](https://axelpale.github.io/affineplane/) and ' +
    '[GitHub](https://github.com/axelpale/affineplane) for ' +
    'introduction and source code.',
  // Styling; decorate the docs
  decorators: [
    decor.aliases(),
    decor.alphabetical({
      groupCase: true
    }),
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
        // Normalize throws title
        pattern: /^throws?:?/i,
        replacement: '**Throws:**'
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
      helm2: '#affineplanehelm2',
      helm3: '#affineplanehelm3',
      line2: '#affineplaneline2',
      line3: '#affineplaneline3',
      path2: '#affineplanepath2',
      plane2: '#affineplaneplane2',
      plane3: '#affineplaneplane3',
      point2: '#affineplanepoint2',
      point3: '#affineplanepoint3',
      poly2: '#affineplanepoly2',
      size2: '#affineplanesize2',
      vec2: '#affineplanevec2',
      vec3: '#affineplanevec3',
    }),
    decor.italicSingles(),
    decor.backTopLinks(),
    decor.toc({
      title: '**Contents:**'
    }),
    decor.sourceLinks({
      basePath: path.resolve(__dirname, '..'),
      baseUrl: 'https://github.com/axelpale/affineplane/blob/main/'
    }),
  ]
})
