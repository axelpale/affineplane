module.exports = (vec) => {
  // affineplane.dir3.fromVector(vec)
  //
  // Create a new direction from a vector.
  //
  // Parameters
  //   vec
  //     a vec3, represented in the reference frame.
  //
  // Return
  //   a dir3
  //
  const x = vec.x
  const y = vec.y
  const z = (vec.z ? vec.z : 0) // support vec2
  const m = Math.sqrt(x * x + y * y + z * z)

  if (m === 0) { // TODO if smaller than epsilon
    return {
      x: 0,
      y: 0,
      z: 0
    }
  }

  // Make into unit vector
  return {
    x: x / m,
    y: y / m,
    z: z / m
  }
}
