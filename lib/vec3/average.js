module.exports = (vs) => {
  // affineplane.vec3.average(vs)
  //
  // Arithmetic mean of an array of vectors.
  //
  // Parameters
  //   vs
  //     array of vec3
  //
  // Return
  //   a vec3
  //
  const n = vs.length

  if (n > 0) {
    let sumx = 0
    let sumy = 0
    let sumz = 0
    for (let i = 0; i < n; i += 1) {
      sumx += vs[i].x
      sumy += vs[i].y
      sumz += vs[i].z
    }

    return {
      x: sumx / n,
      y: sumy / n,
      z: sumz / n
    }
  }

  throw new Error('Cannot compute mean for an empty array.')
}
