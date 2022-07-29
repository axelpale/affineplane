module.exports = (ps) => {
  // affineplane.point3.average(ps)
  //
  // Average of points.
  //
  // Parameters
  //   ps
  //     array of point3
  //
  // Return
  //   a point3
  //
  const n = ps.length

  if (n > 0) {
    let sumx = 0
    let sumy = 0
    let sumz = 0
    for (let i = 0; i < n; i += 1) {
      sumx += ps[i].x
      sumy += ps[i].y
      sumz += ps[i].z
    }

    return {
      x: sumx / n,
      y: sumy / n,
      z: sumz / n
    }
  }

  throw new Error('Cannot compute mean for an empty array.')
}
