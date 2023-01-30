module.exports = (arrp) => {
  // @affineplane.point2.fromArray(arrp)
  //
  // Create { x, y } point from array [x, y].
  //
  // Parameters:
  //   arrp
  //     a two-element array
  //
  // Return
  //   a point2
  //
  return {
    x: arrp[0],
    y: arrp[1]
  }
}
