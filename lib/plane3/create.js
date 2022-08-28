module.exports = (origin, span) => {
  // affineplane.plane3.create(origin, span)
  //
  // Create a plane from 3D origin point and 2D basis vector.
  //
  // Parameters
  //   origin
  //     a point3, the position of the plane origin in the reference space.
  //   span
  //     a vec2, the basis vector for the x-axis.
  //     .. The basis for y-axis is always 90deg from x-axis,
  //     .. the direction determined by the right-hand rule
  //     .. where thumb is parallel with positive z-axis.
  //
  // Return
  //   a plane3
  //
  return {
    a: span.x,
    b: span.y,
    x: origin.x,
    y: origin.y,
    z: origin.z
  }
}
