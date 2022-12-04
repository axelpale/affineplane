const epsilon = require('../epsilon')

module.exports = (tr, min, max) => {
  // affineplane.helm2.limitDilation(tr, min, max)
  //
  // Limit the dilating/scaling component of the transformation between
  // min and max (inclusive).
  //
  // Parameters:
  //   tr
  //     a helm2, in the reference basis.
  //   min
  //     a number, the minimum dilation relative to the reference basis.
  //     .. Must be positive.
  //   max
  //     a number, the maximum dilation relative to the reference basis.
  //     .. Must be positive.
  //
  // Return:
  //   a helm2
  //

  // Detect negative
  if (min <= 0 || max <= 0) {
    throw new Error('Invalid min or max value. Must be a positive number.')
  }
  // Swap bad min max
  if (max < min) {
    const mem = max
    max = min
    min = mem
  }
  // Compute current dilation
  const dil = Math.sqrt(tr.a * tr.a + tr.b * tr.b)
  // Singularity check
  if (dil <= epsilon) {
    if (dil < min) {
      // Default direction
      return { a: min, b: 0, x: tr.x, y: tr.y }
    }
    if (dil > max) {
      // Default direction
      return { a: max, b: 0, x: tr.x, y: tr.y }
    }
    // dilation in allowed limits, use original regardless of singular.
    return tr
  }
  // Limit
  const limdil = Math.min(Math.max(dil, min), max)
  // Scaler: x * dil = limdil
  const scaler = limdil / dil

  return {
    a: tr.a * scaler,
    b: tr.b * scaler,
    x: tr.x,
    y: tr.y
  }
}
