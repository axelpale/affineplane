// affineplane.point2
//
// A two-dimensional point. A point is a position in affine space.
// Due to affinity, two points cannot be added together,
// although the distance between and their mean can be computed.
// An affine space does not have origin; { x:0, y:0 } is not an origin.
//

// exports.add
// Points cannot be added because no origin.
// See .translate to add a vector.

exports.average = require('./average')
// affineplane.point2.mean
//
// Alias for affineplane.point2.average
//
exports.mean = exports.average

exports.changeBasis = require('./changeBasis')

exports.copy = require('./copy')

exports.create = require('./create')

exports.delta = require('./difference')
// affineplane.point2.delta
//
// Alias for affineplane.point2.difference
//
exports.difference = exports.delta

exports.distance = require('./distance')

exports.equal = require('./equal')
// affineplane.point2.equals
//
// Alias for affineplane.point2.equal
//
exports.equals = exports.equal

exports.fromArray = require('./fromArray')

exports.homothety = require('./homothety')

// exports.magnitude
// Points cannot have magnitude because no origin to measure it.

// exports.max
// Points cannot have max because no origin to measure to.

// exports.min
// Points cannot have min because no origin to measure to.

// exports.norm = exports.magnitude
// Points cannot have norm because no origin to measure it.

exports.offset = require('./offset')

// exports.opposite
// Points cannot have opposite because no origin to oppose to.

exports.polarOffset = require('./polarOffset')

exports.projectToPlane = require('./projectToPlane')
exports.projectToLine = require('./projectToLine')

exports.rotateBy = require('./rotateBy')

// exports.rotation
// Points cannot have rotation because no origin to rotate about.

exports.toArray = require('./toArray')

exports.transform = require('./transform')

exports.transitFrom = require('./transitFrom')
exports.transitTo = require('./transitTo')

exports.translate = require('./translate')
// affineplane.point2.move
//
// Alias for affineplane.point2.translate
//
exports.move = exports.translate

exports.validate = require('./validate')
