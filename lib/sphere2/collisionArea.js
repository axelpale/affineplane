module.exports = (c, cc) => {
  // @affineplane.sphere2.collisionArea(c, cc)
  //
  // Compute collision area between two spheres.
  //
  // Parameters:
  //   c
  //     a sphere2
  //   cc
  //     a sphere2
  //
  // Return
  //   a scalar2, number, the area.
  //

  // For details about circle intersection, see:
  // https://mathworld.wolfram.com/Circle-CircleIntersection.html
  const dx = cc.x - c.x
  const dy = cc.y - c.y
  const d2 = dx * dx + dy * dy
  const r = c.r
  const rr = cc.r
  const d = Math.sqrt(d2)
  const r2 = r * r
  const rr2 = rr * rr

  if (r === 0 || rr === 0) {
    // One of the circles is a point.
    return 0
  }

  if (d === 0) {
    // Concentric circles. Area of the smaller is the overlap.
    if (r <= rr) {
      return Math.PI * r2
    }
    return Math.PI * rr2
  }

  const area = r2 * Math.acos((d2 + r2 - rr2) / (2 * d * r)) +
    rr2 * Math.acos((d2 + rr2 - r2) / (2 * d * rr)) -
    0.5 * Math.sqrt((-d + r + rr) * (d + r - rr) * (d - r + rr) * (d + r + rr))

  return area
}
