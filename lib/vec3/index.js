// affineplane.vec3
// affineplane.vector3
//
// Three-dimensional vector.
//
exports.add = require('./add')
exports.almostEqual = require('./almostEqual')
exports.average = require('./average')
exports.copy = require('./copy')
exports.create = require('./create')
exports.cross = require('./cross')
exports.diff = require('./difference')
exports.difference = exports.diff
exports.dot = require('./dot')
exports.equal = require('./equal')
exports.fromArray = require('./fromArray')
exports.fromPolar = require('./fromPolar')
exports.fromSpherical = require('./fromSpherical')
exports.invert = require('./invert')
exports.inverse = exports.invert
exports.magnitude = require('./magnitude')
exports.negate = exports.invert
exports.norm = exports.magnitude
exports.normalize = require('./unit')
exports.projectTo = require('./projectTo')
exports.rotateBy = require('./rotateBy')
exports.rotateTo = require('./rotateTo')
exports.scaleBy = require('./scaleBy')
exports.scaleTo = require('./scaleTo')
exports.subtract = exports.diff
exports.sum = require('./sum')
exports.toArray = require('./toArray')
exports.toPolar = require('./toPolar')
exports.toSpherical = require('./toSpherical')
exports.transitFrom = require('./transitFrom')
exports.transitTo = require('./transitTo')
exports.unit = exports.normalize
exports.validate = require('./validate')
