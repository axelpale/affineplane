/// affineplane.dir3
//
// Direction in 3D. Basically a unit vector that carries semantics of direction.
// Under a change of the reference frame, the change in translation and scale
// do not affect the direction, only the orientation (=attitude) does.
//

exports.almostEqual = require('./almostEqual')
exports.create = require('./fromSpherical')
exports.fromSpherical = exports.create
exports.fromVector = require('./fromVector')
// exports.projectTo
// exports.transitFrom
// exports.transitTo
// exports.toAngles
exports.toVector = require('./toVector')
