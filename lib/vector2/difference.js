module.exports = (v, w) => {
  // A vector between v and w
  //
  // Parameters:
  //   v
  //     vector2
  //   w
  //     vector2
  //
  // Return
  //   vector2
  //
  return {
    x: v.x - w.x,
    y: v.y - w.y
  }
}
