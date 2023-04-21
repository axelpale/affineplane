// @affineplane.point2
//
// A two-dimensional point. A point is a position in affine space.
// Due to affinity, two points cannot be added together,
// although the distance between and their mean can be computed.
// An affine space does not have origin; { x:0, y:0 } is not an origin.
//
// ![A point](geometry_point.png)
//

// exports.add
// Points cannot be added because no origin.
// See .translate to add a vector.

// exports.magnitude
// Points cannot have magnitude because no origin to measure it.

// exports.max
// Points cannot have max because no origin to measure to.

// exports.min
// Points cannot have min because no origin to measure to.

// exports.norm = exports.magnitude
// Points cannot have norm because no origin to measure it.

// exports.opposite
// Points cannot have opposite because no origin to oppose to.

// exports.rotation
// Points cannot have rotation because no origin to rotate about.

exports.almostEqual = require('./almostEqual')
exports.average = require('./average')
exports.copy = require('./copy')
exports.create = require('./create')
exports.delta = require('./difference')
exports.diff = exports.delta
exports.difference = exports.delta
exports.direction = require('./direction')
exports.distance = require('./distance')
exports.equal = require('./equal')
exports.equals = exports.equal
exports.fromArray = require('./fromArray')
exports.homothety = require('./homothety')
exports.offset = require('./offset')
exports.polarOffset = require('./polarOffset')
exports.projectTo = require('./projectToPlane')
exports.projectToLine = require('./projectToLine')
exports.projectToPlane = exports.projectTo
exports.rotateBy = require('./rotateBy')
exports.toArray = require('./toArray')
exports.transform = require('./transform')
exports.transformMany = require('./transformMany')
exports.transitFrom = require('./transitFrom')
exports.transitTo = require('./transitTo')
exports.translate = require('./translate')
exports.move = exports.translate
exports.validate = require('./validate')
exports.vectorTo = exports.delta
