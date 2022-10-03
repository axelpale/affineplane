/// affineplane.dir3
//
// Direction in 3D. Basically a unit vector that carries semantics of direction.
// Under a change of the reference frame, the change in translation and scale
// do not affect the direction, only the orientation (=attitude) does.
//

exports.almostEqual = require('./almostEqual')
exports.create = require('./fromAngles')
exports.fromAngles = exports.create
