module.exports = (pr) => {
  // Deep-copy the projection object.
  //
  // Parameters
  //   pr
  //     a proj2, a projection
  //
  // Return
  //   a proj2, a projection
  //
  return {
    a: pr.a,
    b: pr.b,
    x: pr.x,
    y: pr.y
  }
}
