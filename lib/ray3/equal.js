module.exports = (r, rr) => {
  // @affineplane.ray3.equal(r, rr)
  //
  // Test if rays are strictly equal in position and direction.
  //
  // Parameters
  //   r
  //     a ray3
  //   rr
  //     a ray3
  //
  // Return
  //   a boolean
  //
  return (
    r.x === rr.x &&
    r.y === rr.y &&
    r.z === rr.z &&
    r.dx === rr.dx &&
    r.dy === rr.dy &&
    r.dz === rr.dz
  )
}
