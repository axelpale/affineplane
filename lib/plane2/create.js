module.exports = (origin, span) => {
  // affineplane.plane2.create(origin, span)
  //
  // A 2D euclidean plane.
  //
  // Parameters:
  //   origin
  //     a point2 on the reference plane.
  //   span
  //     a vec2 on the reference plane.
  //     .. This vector is the basis vector for the x-axis of the plane.
  //     .. The basis vector for y can be found 90deg clockwise from x-axis.
  //
  // Return:
  //   a plane2
  //
  return {
    a: span.x,
    b: span.y,
    x: origin.x,
    y: origin.y
  }
}
