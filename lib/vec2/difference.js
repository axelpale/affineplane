module.exports = (v, w) => {
  // @affineplane.vec2.difference(v, w)
  //
  // A vector between v and w, in other words, v - w.
  //
  // Parameters:
  //   v
  //     a vec2
  //   w
  //     a vec2
  //
  // Return
  //   a vec2
  //
  return {
    x: v.x - w.x,
    y: v.y - w.y
  }
}
