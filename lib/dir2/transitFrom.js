module.exports = (dir, source) => {
  // affineplane.dir2.transitFrom(dir, source)
  //
  // Transit a direction from the source plane
  // to the reference plane.
  //
  // Parameters:
  //   dir
  //     a dir2 on the source plane.
  //   source
  //     a plane2, the source plane, represented
  //     .. on the reference plane.
  //
  // Return:
  //   a dir2, represented on the reference plane.
  //

  // The plane is a mapping from itself to the reference plane.
  const pa = source.a
  const pb = source.b
  const pm = Math.sqrt(pa * pa + pb * pb)

  // Keep direction as unit vector regardless the plane scale.
  return {
    x: (pa * dir.x - pb * dir.y) / pm,
    y: (pb * dir.x + pa * dir.y) / pm
  }
}
