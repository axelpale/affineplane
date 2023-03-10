// @affineplane.dist3
//
// The distance measure is a directionless, always positive number (≥0).
// When transited between bases, only a change in the coordinate scale
// affects the distance. Rotation or translation of the basis does not
// change the distance measure.
//
// ![Distance transited between planes](projection_distance_2d.png)
//

exports.almostEqual = require('./almostEqual')
exports.create = require('./create')
exports.equal = require('./equal')
exports.projectToPlane = require('./projectToPlane')
exports.projectTo = exports.projectToPlane
exports.transitFrom = require('./transitFrom')
exports.transitTo = require('./transitTo')
exports.validate = require('./validate')
