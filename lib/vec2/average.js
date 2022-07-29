module.exports = (vs) => {
  // affineplane.vec2.average(vs)
  // affineplane.vec2.mean(vs)
  //
  // Average of the vectors.
  //
  // Parameters
  //   vs
  //     an array of vec2
  //
  // Return
  //   a vec2
  //
  const n = vs.length

  if (n < 1) {
    throw new Error('Cannot compute mean for an empty array.')
  }

  let sumx = 0
  let sumy = 0
  for (let i = 0; i < n; i += 1) {
    sumx += vs[i].x
    sumy += vs[i].y
  }

  return {
    x: sumx / n,
    y: sumy / n
  }
}
