const toUnit = require('../vec3/unit')

module.exports = (dir, angle) => {
  // affineplane.quat4.fromDirectionAndAngle(dir, angle)
  //
  // Construct a unit quaternion from an axis vector and a rotation angle
  // around that direction. Note that if this quaternion is later used to
  // rotate a 3D vector, the rotation angle will be applied twice to map
  // the vector back to 3D.
  //
  // Parameters:
  //   dir
  //     a dir3 or a vec3
  //   angle
  //     a number, an angle in radians
  //
  // Return
  //   a quat4
  //

  // Precompute
  const co = Math.cos(angle)
  const si = Math.sin(angle)

  // Ensure unit vector
  const u = toUnit(dir)

  return {
    a: co,
    b: u.x * si,
    c: u.y * si,
    d: u.z * si
  }
}
