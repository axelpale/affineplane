module.exports = (ca, cb, r) => {
  // @affineplane.sphere2.tangentCircles(ca, cb, r)
  //
  // Find circles of radius r that are externally tangent to the given circles A and B.
  // Usually there are two such circles, one at the left-hand side and one at the right-hand side
  // with respect to the vector from A to B. The function returns the two circles in this left-right order.
  //
  // If the gap between A and B is too large for the circles to be tangent to both A and B
  // then the function compromises and returns two circles: the first is tangent to A at the direction of B
  // and the second is tangent to B at the direction of A.
  //
  // If the gap between A and B just fits a circle of radius r, the function returns only one circle.
  //
  // If the circles A and B are nested, the function compromises and returns only one circle that is externally
  // tangent to the larger one so that the returned circle is still as close to the smaller one as possible.
  //
  // Parameters:
  //   ca
  //     a circle {x,y,r}, the circle A.
  //   cb
  //     a circle {x,y,r}, the circle B.
  //   r
  //     a number, the radius of the circles to find.
  //
  // Returns:
  //   an array of sphere2. The array contains either one or two sphere2.
  //
  // See also sphere2.tangentCircle if you only need either the left-hand or right-hand result.
  //

  // Sort circles largest first. This avoids special treatment of cases
  // where the point H (the point C projected on the AB line) is outside AB.
  // However, we need to maintain handedness with respect to the original argument order.
  let swapped = false
  if (ca.r < cb.r) {
    // Swap
    const ct = cb
    cb = ca
    ca = ct
    swapped = true
  }

  // Vector from A to B, of length c.
  const vab = {
    x: cb.x - ca.x,
    y: cb.y - ca.y
  }
  // Triangle sides
  const a = cb.r + r // length of BC
  const b = ca.r + r // length of AC
  const c = Math.sqrt(vab.x * vab.x + vab.y * vab.y) // ca.r + cb.r for tangent A and B

  // Check special cases.

  const epsilon = 1000 * Number.EPSILON
  const cUpper = c + epsilon
  const cLower = c - epsilon
  if (cUpper > 0 && cLower < 0) {
    // The circles A and B are concentric i.e. the distance between their centers is zero.
    // The circle C can be tangent to both only if A and B have equal radius.
    // The best compromise is to let C be tangent to the one with the largest radius (A).
    // The tangent position for the circle C is found at an arbitrary angle (choose 0 deg).
    return [{
      x: ca.x + b, // because ca.r is always >= cb.r and b = ca.r + r.
      y: ca.y,
      r
    }]
  }

  if (c + cb.r <= ca.r) {
    // The circle A fully covers the circle B.
    // In other words, the circle B is completely inside the circle A.
    // The best compromise is to let the circle C be tangent to the circle A
    // at a position closest to the circle B.
    const vac = {
      x: vab.x * b / c,
      y: vab.y * b / c
    }
    // The center point of the circle C: vc = va + vac
    return [{
      x: ca.x + vac.x,
      y: ca.y + vac.y,
      r
    }]
  }

  if (a + b < cUpper && cLower < a + b) {
    // There is a gap between the circles A and B that just fits the circle of radius r.
    // In this case the function returns only one circle. Compute as tangent to the circle A.
    // Vector from A to C.
    const vac = {
      x: vab.x * b / c,
      y: vab.y * b / c
    }
    // The center point of the circle C: vc = va + vac
    const cc = {
      x: ca.x + vac.x,
      y: ca.y + vac.y,
      r
    }
    return [cc]
  }

  if (a + b <= c) {
    // The circles A and B are so far away that the circle C cannot connect them.
    // Find a circle that is tangent with A and has center point along AB.
    // Also, find a circle that is tangent with B and has center point along BA.

    // Find a circle C that is tangent to the circle A.
    const vac = {
      x: vab.x * b / c,
      y: vab.y * b / c
    }
    // The center point of the circle C: vc = va + vac
    const cc = {
      x: ca.x + vac.x,
      y: ca.y + vac.y,
      r
    }
    // Find a circle D that is tangent to the circle B.
    const vbc = {
      x: -vab.x * a / c,
      y: -vab.y * a / c
    }
    // The center point of the circle D: vd = vb + vbc
    const cd = {
      x: cb.x + vbc.x,
      y: cb.y + vbc.y,
      r
    }
    // Respect the original argument order regardless of their radii.
    if (swapped) {
      // Swapped order. Prefer the circle B.
      return [cd, cc]
    }
    // Original order.
    return [cc, cd]
  }

  // After excluding the special cases above,
  // it is now possible to find two circles of radius r that are
  // tangent to both circles A and B.
  const p = (a + b + c) / 2
  const A = Math.sqrt(p * (p - a) * (p - b) * (p - c))
  const h = 2 * A / c
  const w = Math.sqrt(b * b - h * h)
  // Vector from A to H, of length w.
  const vw = {
    x: vab.x * w / c,
    y: vab.y * w / c
  }
  // Find the perpendicular vector from H to C, of length h.
  const vh = {
    x: -vw.y * h / w,
    y: vw.x * h / w
  }
  // Find the center points for both left-hand and right-hand tangent circles.
  // A + vw ± vh
  const vleft = {
    x: ca.x + vw.x - vh.x,
    y: ca.y + vw.y - vh.y,
    r
  }
  const vright = {
    x: ca.x + vw.x + vh.x,
    y: ca.y + vw.y + vh.y,
    r
  }
  // Respect the original argument order regardless of their radii.
  if (swapped) {
    // Swapped order, the right is actually the left.
    return [vright, vleft]
  }
  // Original order.
  return [vleft, vright]
}
