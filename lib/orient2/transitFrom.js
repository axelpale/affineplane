module.exports = (r, source) => {
  // @affineplane.orient2.transitFrom(r, source)
  //
  // Transit an orientation from the source basis
  // to the reference basis.
  //
  // Parameters:
  //   r
  //     a orient2 in the source basis.
  //   source
  //     a plane2, the source basis, represented
  //     .. in the reference basis.
  //
  // Return:
  //   a orient2, represented in the reference basis.
  //

  // The plane is a mapping from itself to the reference plane.
  const pa = source.a
  const pb = source.b
  const pm = Math.sqrt(pa * pa + pb * pb)

  // Keep orientation as unit vector regardless the plane scale.
  return {
    a: (pa * r.a - pb * r.b) / pm,
    b: (pb * r.a + pa * r.b) / pm
  }
}
