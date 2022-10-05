const invert = require('../plane3/invert')
const transitFrom = require('./transitFrom')

module.exports = (dir, target) => {
  // affineplane.dir3.transitTo(dir, target)
  //
  // Transit a dir3 to a target plane.
  // In other words, represent the direction
  // in the coordinate system of the target plane.
  //
  // Parameters:
  //   dir
  //     a number, a dir3 on the reference plane.
  //   target
  //     a plane3, the target plane, represented
  //     .. on the reference plane.
  //
  // Return:
  //   a dir3, represented on the target plane.
  //
  const itarget = invert(target)
  return transitFrom(dir, itarget)
}
