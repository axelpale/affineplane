// @affineplane.rot2
//
// Rotation in 2D. Represented by object `{ a, b }`.
//
// Rotation differs from orientation in the manner that
// where orientation is a static rotational position of an object,
// rotation is dynamic transform of an object.
// Therefore a change of basis does not affect rotation but
// it does affect orientation.
//
exports.create = require('./create')
exports.validate = require('./validate')
