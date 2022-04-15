// A point is a position in affine space.
// An affine space does not have origin; { x:0, y:0 } is not an origin.

/// exports.add
/// Points cannot be added because no origin.
/// See .translate to add a vector.

exports.average = require('./average')

exports.copy = require('./copy')

exports.create = require('./create')

exports.delta = require('./difference')
exports.difference = exports.delta

exports.distance = require('./distance')

exports.equal = require('../vector2/equal')

exports.fromArray = require('./fromArray')

/// exports.magnitude
/// Points cannot have magnitude because no origin to measure it.

/// exports.max
/// Points cannot have max because no origin to measure to.

exports.mean = exports.average

/// exports.min
/// Points cannot have min because no origin to measure to.

exports.move = require('./translate')

/// exports.norm = exports.magnitude
/// Points cannot have norm because no origin to measure it.

exports.offset = require('./offset')

/// exports.opposite
/// Points cannot have opposite because no origin to oppose to.

exports.polarOffset = require('./polarOffset')

exports.rotateBy = require('./rotateBy')

/// exports.rotation
/// Points cannot have rotation because no origin to rotate about.

exports.toArray = require('./toArray')

exports.transform = require('./transform')

exports.translate = exports.move
