// @affineplane.vec2
//
// Vector is a two dimensional dynamic movent between points,
// also known as a displacement vector. See affineplane.point2 for
// position vectors.
//
// ![A vector](geometry_vector.png)
//
exports.ZERO = { x: 0, y: 0 }

// exports.distance
// Vectors do not have distance. See magnitude.

exports.add = require('./add')
exports.almostEqual = require('./almostEqual')
exports.average = require('./average')
exports.copy = require('./copy')
exports.create = require('./create')
exports.cross = require('./cross')
exports.diff = require('./difference')
exports.difference = exports.diff
exports.divide = require('./divide')
exports.dot = require('./dot')
exports.equal = require('./equal')
exports.fromArray = require('./fromArray')
exports.fromPolar = require('./fromPolar')
exports.polar = exports.fromPolar
exports.independent = require('./independent')
exports.inverse = require('./invert')
exports.invert = exports.inverse
exports.magnitude = require('./magnitude')
exports.max = require('./max')
exports.mean = exports.average
exports.min = require('./min')
exports.negate = exports.inverse
exports.norm = exports.magnitude
exports.normalize = require('./unit')
exports.opposite = exports.negation
// TODO MAYBE exports.polarAverage
exports.projectToPlane = require('./projectToPlane')
exports.projectTo = exports.projectToPlane
exports.projectToVector = require('./projectToVector')
exports.rotateBy = require('./rotateBy')
exports.rotateTo = require('./rotateTo')
exports.scaleBy = require('./scaleBy')
exports.scaleTo = require('./scaleTo')
exports.subtract = exports.diff
exports.sum = require('./sum')
exports.toArray = require('./toArray')
exports.toPolar = require('./toPolar')
exports.transformBy = require('./transformBy')
exports.transitFrom = require('./transitFrom')
exports.transitTo = require('./transitTo')
exports.unit = exports.normalize
exports.validate = require('./validate')
