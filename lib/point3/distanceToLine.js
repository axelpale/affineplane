const epsilon = require('../epsilon')

module.exports = (p, line) => {
  // @affineplane.point3.distanceToLine(p, line)
  //
  // Compute the smallest euclidean distance between a point and a line.
  // See also affineplane.point3.distanceToRay.
  //
  // Parameters
  //   p
  //     a point3
  //   line
  //     a line3
  //
  // Return
  //   a number, a scalar1, a dist3, a distance
  //

  // See the commented lines for algebraic solution with function calls.
  // After the commented lines, we have opened the function calls
  // and removed unnecessary square roots and vectorization.

  // // Get vector from line origin to the point
  // const av = pointDiff(line.origin, p)
  // // Project the vector to the line
  // const bv = vectorProject(av, line.span)
  // // Magnitudes
  // const am = vectorMagn(av)
  // const bm = vectorMagn(bv)
  // // Apply pythagoras to find the distance
  // return Math.sqrt(am * am - bm * bm)

  // Extract the line
  const lp = line.origin
  const xs = line.span.x
  const ys = line.span.y
  const zs = line.span.z
  // Get vector va from line origin to the given point.
  const xa = p.x - lp.x
  const ya = p.y - lp.y
  const za = p.z - lp.z
  // Get va's magnitude squared
  const ma2 = xa * xa + ya * ya + za * za
  // Project va to the line to get vector vb and get its magnitude squared.
  const adots = xa * xs + ya * ys + za * zs
  const sdots = xs * xs + ys * ys + zs * zs
  let mb2
  if (sdots < epsilon) {
    // The line has zero span.
    // Assume vectors perpendicular, thus vb has zero magnitude.
    mb2 = 0
  } else {
    mb2 = adots * adots / sdots
  }
  // Apply pythagoras to find the distance
  return Math.sqrt(ma2 - mb2)
}
