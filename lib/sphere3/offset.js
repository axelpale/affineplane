module.exports = (c, dx, dy, dz = 0) => {
  // @affineplane.sphere3.offset(c, dx, dy[, dz])
  //
  // Offset a sphere by scalars dx, dy, dz.
  // See affineplane.sphere3.translate to offset by a vector.
  //
  // Parameters:
  //   c
  //     a sphere3
  //   dx
  //     a number, an offset along x-axis.
  //   dy
  //     a number, an offset along y-axis.
  //   dz
  //     optional number. The offset along z-axis, default is 0.
  //
  // Return
  //   a sphere3, translated
  //
  return {
    x: c.x + dx,
    y: c.y + dy,
    z: c.z + dz,
    r: c.r
  }
}
