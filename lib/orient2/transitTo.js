const invert = require('../plane2/invert')
const transitFrom = require('./transitFrom')

module.exports = (r, target) => {
  // affineplane.orient2.transitTo(r, target)
  //
  // Transit a orient2 to a target basis.
  // In other words, represent the direction
  // in the coordinate system of the target basis.
  //
  // Parameters:
  //   r
  //     a number, a orient2 in the reference basis.
  //   target
  //     a plane2, the target basis, represented
  //     .. in the reference basis.
  //
  // Return:
  //   a orient2 in the target basis.
  //
  const itarget = invert(target)
  return transitFrom(r, itarget)
}
