module.exports = (pr, size) => {
  // Project a rectangular size from a plane to another.
  // Only the scale change affects the size.
  //
  // Parameters:
  //   pr
  //     a proj2, a projection between planes
  //   size
  //     a size2, a rectangular size in 2D
  //
  // Return
  //   a number, the same size on the target plane.
  //
  const scale = Math.sqrt(pr.b * pr.b + pr.a * pr.a)
  return {
    w: size.w / scale,
    h: size.h / scale
  }
}
