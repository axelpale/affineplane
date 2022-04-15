module.exports = (p, dx, dy) => {
  // Offset a point by scalars dx dy.
  //
  // Parameters:
  //   p
  //     point2
  //   dx
  //     number, a horizontal offset
  //   dy
  //     number, a vertical offset
  //
  // Return
  //   point2, translated by the vector { x: dx, y: dy }
  //
  return {
    x: p.x + dx,
    y: p.y + dy
  }
}
