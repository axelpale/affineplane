// affineplane.vec4
// affineplane.quat
//
// A vec4 is a 4D vector { r, x, y, z }. It can represent a quaternion
// and a rotating vector in 3D space, r being the radius or rotation at
// angle of 1 rad.
//

exports.add = require('./add')
exports.hamilton = require('./hamilton')
exports.create = require('./create')
exports.norm = require('./norm')
exports.product = exports.combine
exports.scaleBy = require('./scaleBy')
