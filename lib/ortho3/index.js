// affineplane.ortho3
//
// Orthogonal projection between parallel 2D planes
// in three-dimensions and under 2D helmert transformation.
//
// We call the domain of the projection the *source plane*
// and the image of the projection the *target plane*.
//

exports.compose = require('./compose')
exports.combine = exports.compose
exports.create = require('./create')
exports.fromFeats = require('./fromFeats')
exports.validate = require('./validate')
exports.vec2 = require('./vec2')
