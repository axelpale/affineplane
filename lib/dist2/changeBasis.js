module.exports = (d, sourceBasis, targetBasis) => {
  // Convert a distance between bases.
  //
  // Parameters
  //   d
  //     a scalar, a number on the source basis.
  //   sourceBasis
  //     a ABXY, a transition from the source basis to
  //     the reference basis.
  //   targetBasis
  //     a ABXY, a transition from the target basis to
  //     the reference basis.
  //
  // Return
  //   the scalar on the targer basis.
  //
  const inv = inverse(targetBasis)
  const rel = multiply(inv, sourceBasis)
  const scale = transform.getScale(rel)
  return d * scale
}
