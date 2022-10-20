const ham = require('../quat4/hamilton')
const norm = require('./magnitude')

module.exports = function (v, axis, angle) {
  // affineplane.vec3.rotateAroundAxis(v, axis, angle)
  //
  // Rotate a vector by the given radian angle around the specified axis vector.
  // The method uses [Rodriques' rotation formula](
  // https://en.wikipedia.org/wiki/Rodrigues%27_rotation_formula) under
  // the hood. If you need to rotate multiple vectors simultaneously,
  // it is probably better to construct a rotation matrix first and apply
  // it to each vector.
  //
  // Parameters
  //   v
  //     a vec3
  //   axis
  //     a vec3, must not be zero vector
  //   angle
  //     a number, an angle in radians.
  //     .. Right-hand rotation around the given axis.
  //
  // Return
  //   a vec3
  //

  const co = Math.cos(angle)
  const si = Math.sin(angle)
  const ico = 1 - co

  const vx = v.x
  const vy = v.y
  const vz = v.z

  const kn = norm(axis)
  const kx = axis.x / kn
  const ky = axis.y / kn
  const kz = axis.z / kn

  const dot = kx * vx + ky * vy + kz * vz
  const dico = dot * ico

  return {
    x: vx * co + (ky * vz - kz * vy) * si + kx * dico,
    y: vy * co + (kz * vx - kx * vz) * si + ky * dico,
    z: vz * co + (kx * vy - ky * vx) * si + kz * dico
  }
}
