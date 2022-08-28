module.exports = (p, dx, dy) => {
  // affineplane.point2.offset(p, dx, dy)
  //
  // Offset a point by scalars dx dy.
  //
  // Parameters:
  //   p
  //     a point2
  //   dx
  //     a number, an offset along x-axis.
  //   dy
  //     a number, an offset along y-axis.
  //
  // Return
  //   a point2, translated by the vector { x: dx, y: dy }
  //
  return {
    x: p.x + dx,
    y: p.y + dy
  }
}
