module.exports = (tr, source) => {
  // @affineplane.helm3.transitFrom(tr, source)
  //
  // Transit a helm3 from the source plane
  // to the reference plane.
  //
  // Parameters:
  //   tr
  //     a helm3 transformation on the source plane.
  //   source
  //     a plane3, the source plane, represented
  //     .. on the reference plane.
  //
  // Return:
  //   a helm3, represented on the reference plane.
  //
  // Invariants:
  // - scale and rotation of the plane affects only the translating property
  //   .. of helm3, so that the direction of translation is preserved.
  // - translation of the plane does not affect helm3 at all.
  // - scaling and rotation properties of helm3 are preserved as is.
  //

  const sa = source.a
  const sb = source.b
  const sm = Math.sqrt(sa * sa + sb * sb)
  return {
    a: tr.a,
    b: tr.b,
    x: sa * tr.x - sb * tr.y,
    y: sb * tr.x + sa * tr.y,
    z: sm * tr.z
  }
}
