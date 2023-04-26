// @affineplane.segment3
//
// Three-dimensional line segment. Represented by the segment start and end
// points in an array of length two.
//
// Example: `[{ x: 0, y: 0, z: 0 }, { x: 1, y: 2, z: 3 }]`
//

exports.create = require('./create')
exports.toVector = require('./toVector')
exports.transitFrom = require('./transitFrom')
exports.transitTo = require('./transitTo')
exports.validate = require('./validate')
