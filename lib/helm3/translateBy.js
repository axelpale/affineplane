module.exports = function (tr, vec) {
  // affineplane.helm3.translateBy(tr, vec)
  //
  // Modify transformation so that its image
  // is translated by the given vector.
  // In other words it transforms points
  // further by the given vector.
  // In other words the origin of
  // the linear transformation {a,b}
  // is translated by the vector.
  //
  // Parameters
  //   tr
  //     a helm3, a transform
  //   vec
  //     a vec2 or vec3
  //
  // Return
  //   a helm3, a transform
  //
  return {
    a: tr.a,
    b: tr.b,
    x: tr.x + vec.x,
    y: tr.y + vec.y,
    z: tr.z + (vec.z ? vec.z : 0)
  }
}
