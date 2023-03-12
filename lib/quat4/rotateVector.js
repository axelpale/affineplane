module.exports = (quat, vec) => {
  // @affineplane.quat4.rotateVector(quat, vec)
  //
  // Apply quaternion to rotate a vector.
  // Note that the quaternion must rotate the vector twice to return it
  // back to the 3D space. Therefore, if the quaternion was created using
  // an angle like π/2, the vector will be rotated twice that amount, π.
  //
  // Parameters:
  //   quat
  //     a quat4, a quaternion.
  //   vec
  //     a vec3, the vector to rotate
  //
  // Return
  //   a vec3, the rotated vector.
  //

  const a = quat.a
  const b = quat.b
  const c = quat.c
  const d = quat.d

  const s = 2 / (a * a + b * b + c * c + d * d)
  const bs = b * s
  const cs = c * s
  const ds = d * s
  const ab = a * bs
  const ac = a * cs
  const ad = a * ds
  const bb = b * bs
  const bc = b * cs
  const bd = b * ds
  const cc = c * cs
  const cd = c * ds
  const dd = d * ds

  const x = vec.x
  const y = vec.y
  const z = vec.z

  return {
    x: x * (1 - cc - dd) + y * (bc - ad) + z * (bd + ac),
    y: x * (bc + ad) + y * (1 - bb - dd) + z * (cd - ab),
    z: x * (bd - ac) + y * (cd + ab) + z * (1 - bb - cc)
  }
}
