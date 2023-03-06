module.exports = (c, dx, dy) => {
  // @affineplane.sphere2.offset(c, dx, dy)
  //
  // Offset a sphere by scalars dx dy.
  //
  // Parameters:
  //   c
  //     a sphere2
  //   dx
  //     a number, an offset along x-axis.
  //   dy
  //     a number, an offset along y-axis.
  //
  // Return
  //   a sphere2, translated
  //
  return {
    x: c.x + dx,
    y: c.y + dy,
    r: c.r
  }
}
