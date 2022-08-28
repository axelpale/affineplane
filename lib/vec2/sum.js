module.exports = (vs) => {
  // affineplane.vec2.sum(vs)
  //
  // Add an array of vectors together.
  // See affineplane.vec2.add to add two vectors together.
  //
  // Parameters
  //   vs
  //     an array of vec2. The array can be empty.
  //
  // Return
  //   a vec2
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
