// affineplane.dist2
//
// The distance measure is a directionless, always positive measure.
// If projected between planes, only a change in the coordinate scale
// affects the distance.

exports.create = require('./create')
exports.changeBasis = require('./changeBasis')
exports.rebase = exports.changeBasis
