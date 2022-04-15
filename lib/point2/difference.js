module.exports = (p, q) => {
  // A vector between from point p to point q
  //
  // Parameters:
  //   p
  //     point2
  //   q
  //     point2
  //
  // Return
  //   vector2
  //
  return {
    x: p.x - q.x,
    y: p.y - q.y
  }
}
