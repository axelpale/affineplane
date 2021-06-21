module.exports = (p, q) => {
  // A vector between from point p to point q
  //
  // Return
  //   vector
  //
  return {
    x: p.x - q.x,
    y: p.y - q.y
  }
}
