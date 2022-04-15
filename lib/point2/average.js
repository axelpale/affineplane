module.exports = (ps) => {
  // Average of points.
  //
  // Parameters
  //   ps
  //     array of point2
  //
  // Return
  //   a point2
  //
  const n = ps.length

  if (n < 1) {
    throw new Error('Cannot compute mean for an empty array.')
  }

  let sumx = 0
  let sumy = 0
  for (let i = 0; i < n; i += 1) {
    sumx += ps[i].x
    sumy += ps[i].y
  }

  return {
    x: sumx / n,
    y: sumy / n
  }
}