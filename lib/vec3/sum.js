module.exports = (vs) => {
  // affineplane.vec3.sum(vs)
  //
  // Add an array of vectors together.
  // See affineplane.vec3.add to add two vectors together.
  //
  // Parameters
  //   vs
  //     an array of vec3. The array can be empty.
  //
  // Return
  //   a vec3. If the array is empty, returns the zero vector.
  //
  const n = vs.length

  let sumx = 0
  let sumy = 0
  let sumz = 0

  for (let i = 0; i < n; i += 1) {
    sumx += vs[i].x
    sumy += vs[i].y
    sumz += vs[i].z
  }

  return {
    x: sumx,
    y: sumy,
    z: sumz
  }
}
