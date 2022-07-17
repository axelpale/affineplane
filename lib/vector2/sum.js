module.exports = (vs) => {
  // affineplane.vector2.sum(vs)
  // Add an array of vectors together. See vector.add to add two vectors.
  //
  // Parameters
  //   vs
  //     an array of vector2. The array can be empty.
  //
  // Return
  //   a vector2
  //
  const n = vs.length

  let sumx = 0
  let sumy = 0
  for (let i = 0; i < n; i += 1) {
    sumx += vs[i].x
    sumy += vs[i].y
  }

  return {
    x: sumx,
    y: sumy
  }
}
