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

  if (d + Math.min(r, rr) <= Math.max(r, rr)) {
    // Nested circles. Area of the smaller is the overlap.
    if (r <= rr) {
      return Math.PI * r2
    }
    return Math.PI * rr2
  }

  if (d >= r + rr) {
    // Circles too distant. Just for optimization.
    return 0
  }

  const acosr = Math.acos((d2 + r2 - rr2) / (2 * d * r))
  const acosrr = Math.acos((d2 + rr2 - r2) / (2 * d * rr))
  const dddd = (-d + r + rr) * (d + r - rr) * (d - r + rr) * (d + r + rr)
  const area = r2 * acosr + rr2 * acosrr - 0.5 * Math.sqrt(dddd)

  return area
}
