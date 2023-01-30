module.exports = (p, dx, dy, dz) => {
  // @affineplane.point3.offset(p, dx, dy, dz)
  //
  // Offset a point by scalars dx, dy, dz.
  //
  // Parameters:
  //   p
  //     a point2
  //   dx
  //     a number, the offset along x-axis
  //   dy
  //     a number, the offset along y-axis
  //   dz
  //     a number, the offset along z-axis
  //
  // Return
  //   a point3, translated by the vector { x: dx, y: dy, z: dz }
  //
  return {
    x: p.x + dx,
    y: p.y + dy,
    z: p.z + dz
  }
}
