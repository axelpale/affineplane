module.exports = (ca, cb, r, righthand) => {
  // @affineplane.sphere2.tangentCircle(ca, cb, r, righthand)
  //
  // Find a circle C that is left-hand tangent to the circles A and B.
  // Use the fourth parameter to switch to right-hand tangent.
  // Note the coordinate system: x-axis points right and y-axis points down.
  //
  // If the gap between A and B is too large for C to be tangent to both
  // then the resulting circle is tangent with A and as close to B as possible.
  // Under the righthand flag, the preference is reversed.
  //
  // Parameters:
  //   ca
  //     a sphere2 {x,y,r}, the circle A.
  //   cb
  //     a sphere2 {x,y,r}, the circle B.
  //   r
  //     a number, a dist2, the radius of the circle C.
  //   righthand
  //     a boolean, default false. Set true to find right-hand tangent circle.
  //
  // Returns:
  //   a sphere2 {x,y,r}
  //
  // See also sphere2.tangentCircles for efficient computation of both hands with just one function call.
  //

  // Sort circles largest first. This avoids special treatment of cases
  // where the point H (the point C projected on the AB line) is outside AB.
  // However, we need to maintain handedness with respect to the original argument order.
  let swapped = false
  let hand = (righthand ? 1 : -1)
  if (ca.r < cb.r) {
    // Swap
    const ct = cb
    cb = ca
    ca = ct
    swapped = true
    hand = -hand
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
  if (-epsilon < c && c < epsilon) {
    // The circles A and B are concentric i.e. the distance between their centers is zero.
    // The circle C can be tangent to both only if A and B have equal radius.
    // The best compromise is to let C be tangent to the one with the largest radius (A).
    // The tangent position for the circle C is found at an arbitrary angle (choose 0 deg).
    return {
      x: ca.x + b, // because b = ca.r + r and ca.r is always >= cb.r.
      y: ca.y,
      r
    }
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
    return {
      x: ca.x + vac.x,
      y: ca.y + vac.y,
      r
    }
  }
  if (a + b < c) {
    // The circles A and B are so far away that the circle C cannot connect them.
    // Find a circle that is tangent with A and has center point along AB.
    // To maintain the original circle order regardless of their radii,
    // we treat both orders separately.
    if (!swapped !== !righthand) { // Coerce to bool, then XOR
      // Swapped xor right-handed order.
      // Prefer the circle B.
      const vbc = {
        x: -vab.x * a / c,
        y: -vab.y * a / c
      }
      // The center point of the circle C: vc = vb + vbc
      return {
        x: cb.x + vbc.x,
        y: cb.y + vbc.y,
        r
      }
    } // else
    // Original order. Prefer the circle A.
    const vac = {
      x: vab.x * b / c,
      y: vab.y * b / c
    }
    // The center point of the circle C: vc = va + vac
    return {
      x: ca.x + vac.x,
      y: ca.y + vac.y,
      r
    }
  }
  // After excluding the special cases above,
  // it is now possible to find a circle that is
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
  // Vector from H to C, of length h.
  const vh = {
    x: hand * -vw.y * h / w,
    y: hand * vw.x * h / w
  }
  // Find the center point of C.
  // A + vw + vh
  return {
    x: ca.x + vw.x + vh.x,
    y: ca.y + vw.y + vh.y,
    r
  }
}
