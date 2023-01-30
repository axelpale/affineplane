const invert = require('../plane3/invert')
const transitFrom = require('./transitFrom')

module.exports = (path, target) => {
  // @affineplane.path3.transitTo(path, target)
  //
  // Transit a path to the target basis.
  //
  // Parameters:
  //   path
  //     a path3, on the reference basis.
  //   target
  //     a plane3, the target basis, represented
  //     .. on the reference basis.
  //
  // Return:
  //   a path3, represented on the target basis.
  //

  // The plane is a mapping from itself to a target basis.
  // We need the projection from the target to the plane.
  const itarget = invert(target)
  return transitFrom(path, itarget)
}
