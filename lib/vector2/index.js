// Vector is a two dimensional dynamic movent between points.

exports.add = require('./add')

exports.almostEqual = require('./almostEqual')

exports.average = require('./average')

exports.copy = require('./copy')

exports.create = require('./create')

exports.difference = require('./difference')

/// exports.distance
/// Vectors do not have distance. See magnitude.

exports.fromArray = require('./fromArray')

exports.fromPolar = require('./fromPolar')
exports.polar = exports.fromPolar

exports.inverse = require('./inverse')

exports.magnitude = require('./magnitude')

exports.max = require('./max')

exports.mean = exports.average

exports.min = require('./min')

exports.negation = exports.inverse

exports.norm = exports.magnitude

exports.opposite = exports.negation

/// exports.polarAverage

exports.project = require('./project')

exports.rotateBy = require('./rotateBy')

exports.rotateTo = require('./rotateTo')

exports.sum = require('./sum')

exports.toArray = require('./toArray')

exports.validate = require('./validate')
