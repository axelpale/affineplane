module.exports = (dir, plane) => {
  // affineplane.dir3.transitFrom(dir, plane)
  //
  // Represent the direction on the reference plane
  // without losing information.
  // Note that plane translation or scale does not affect direction.
  //
  // Parameters:
  //   dir
  //     a dir3 on the source plane.
  //   plane
  //     a plane3 on the reference plane.
  //    .. The source plane.
  //
  // Return:
  //   a dir3, represented on the reference plane.
  //

  // The plane is a mapping from itself to the reference plane.
  const pa = plane.a
  const pb = plane.b
  const pm = Math.sqrt(pa * pa + pb * pb)

  // Keep direction as unit vector regardless the plane scale.
  return {
    x: (pa * dir.x - pb * dir.y) / pm,
    y: (pb * dir.x + pa * dir.y) / pm,
    z: dir.z
  }
}
