// @affineplane.scalar1
//
// The scalar is a directionless, one-dimensional number.
// Suitable for lengths and scales that undergo basis transitions.
// If transited between bases, only a change in the coordinate scale
// affects the number representation of the scalar.
// Rotation or translation of the basis does not affect the scalar
// nor the representation.
//

exports.almostEqual = require('./almostEqual')
exports.create = require('./create')
exports.equal = require('./equal')
exports.projectToPlane = require('./projectToPlane')
exports.transitFrom = require('./transitFrom')
exports.transitTo = require('./transitTo')
exports.validate = require('./validate')
