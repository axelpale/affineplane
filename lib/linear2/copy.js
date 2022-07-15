module.exports = (lin) => {
  // affineplane.linear2.copy(lin)
  //
  // Deep copy linear2.
  //
  // Parameters:
  //   lin
  //     a linear2
  //
  // Return:
  //   a linear2
  //
  return {
    a: lin.a,
    b: lin.b
  }
}
