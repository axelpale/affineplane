module.exports = (vs) => {
  // Average of the vector endpoints. See polarMean for polar variant.
  //
  // Parameters
  //   vs
  //     an array of vector2
  //
  // Return
  //   a vector2
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
