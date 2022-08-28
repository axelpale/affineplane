module.exports = (p, vec) => {
  // affineplane.point3.translate(p, vec)
  //
  // Translate the point by the given vector.
  //
  // Parameters:
  //   p
  //     a point3
  //   vec
  //     a vec3 or vec2
  //
  // Return
  //   a point3
  //
  return {
    x: p.x + vec.x,
    y: p.y + vec.y,
    z: p.z + (vec.z ? vec.z : 0)
  }
}
