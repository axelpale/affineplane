
module.exports = (tr, plane) => {
  // Transit a helm3 from the source plane
  // to the reference plane.
  //
  // Parameters:
  //   tr
  //     a helm3 transformation on the source plane.
  //   plane
  //     a plane3, the source plane, represented
  //     on the reference plane.
  //
  // Return:
  //   a helm3, represented on the target plane.
  //

  // Matrix multiplication matrix(pr) * matrix(tr)
  return {
    a: plane.a * tr.a - plane.b * tr.b,
    b: plane.b * tr.a + plane.a * tr.b,
    x: plane.a * tr.x - plane.b * tr.y + plane.x,
    y: plane.b * tr.x + plane.a * tr.y + plane.y,
    z: plane.z + tr.z
  }
}