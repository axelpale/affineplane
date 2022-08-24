module.exports = (tr, plane) => {
  // affineplane.helm2.transitFrom(tr, plane)
  //
  // Transit a helm2 from the source plane
  // to the reference plane. Note that:
  // - scale and rotation of the plane affects only the translating property
  //   .. of helm2, so that the direction of translation is preserved.
  // - translation of the plane does not affect helm2 at all.
  // - scaling and rotation properties of helm2 are preserved as is.
  //
  // Parameters:
  //   tr
  //     a helm2 transformation on the source plane.
  //   plane
  //     a plane2, the source plane, represented
  //     on the reference plane.
  //
  // Return:
  //   a helm2, represented on the reference plane.
  //

  // Matrix multiplication matrix(pr) * matrix(tr)
  return {
    a: tr.a,
    b: tr.b,
    x: plane.a * tr.x - plane.b * tr.y,
    y: plane.b * tr.x + plane.a * tr.y
  }
}
