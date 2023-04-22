// @affineplane.vec3
//
// Three-dimensional vector, representing 3D movement of geometry.
// Vectors have no position in space, only direction and magnitude,
// and therefore their coordinates are affected only by plane scale
// and rotation when represented on different plane.
//
exports.ZERO = { x: 0, y: 0, z: 0 }

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
exports.fromSpherical = require('./fromSpherical')
exports.independent = require('./independent')
exports.invert = require('./invert')
exports.inverse = exports.invert
exports.magnitude = require('./magnitude')
exports.negate = exports.invert
exports.norm = exports.magnitude
exports.normalize = require('./unit')
exports.projectToPlane = require('./projectToPlane')
exports.projectTo = exports.projectToPlane
exports.projectToVector = require('./projectToVector')
exports.rotateAroundAxis = require('./rotateAroundAxis')
exports.rotateBy = require('./rotateBy')
exports.rotateTo = require('./rotateTo')
exports.scaleBy = require('./scaleBy')
exports.scaleTo = require('./scaleTo')
exports.subtract = exports.diff
exports.sum = require('./sum')
exports.toArray = require('./toArray')
exports.toPolar = require('./toPolar')
exports.toSpherical = require('./toSpherical')
exports.transformBy = require('./transformBy')
exports.transitFrom = require('./transitFrom')
exports.transitTo = require('./transitTo')
exports.unit = exports.normalize
exports.validate = require('./validate')
