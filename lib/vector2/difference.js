module.exports = (v, w) => {
  // A vector between v and w
  //
  // Parameters:
  //   v
  //     a vector2
  //   w
  //     a vector2
  //
  // Return
  //   a vector2
  //
  return {
    x: v.x - w.x,
    y: v.y - w.y
  }
}
