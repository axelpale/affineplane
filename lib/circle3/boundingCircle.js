module.exports = (circles) => {
  // @affineplane.circle3.boundingCircle(circles)
  //
  // Find a circle that encloses all the given circles
  // when projected onto the same xy-plane.
  // The resulting circle shares the largest z coordinate of the given circles.
  // The result is approximate but is quaranteed to contain the optimal
  // (projected) bounding circle.
  //
  // Parameters
  //   circles
  //     an array of circle3
  //
  // Return
  //   a circle3
  //

  const n = circles.length
  if (n === 0) {
    throw new Error('Cannot compute bounding circle for empty set of circles.')
  }

  // Find bounding box
  const c0 = circles[0]
  let minx = c0.x - c0.r
  let maxx = c0.x + c0.r
  let miny = c0.y - c0.r
  let maxy = c0.y + c0.r
  let maxz = c0.z
  for (let i = 1; i < n; i += 1) {
    const c = circles[i]
    const mix = c.x - c.r
    const max = c.x + c.r
    const miy = c.y - c.r
    const may = c.y + c.r
    const maz = c.z
    if (mix < minx) { minx = mix }
    if (max > maxx) { maxx = max }
    if (miy < miny) { miny = miy }
    if (may > maxy) { maxy = may }
    if (maz > maxz) { maxz = maz }
  }

  // TODO Find better bounding box

  // Find the center of the bounding box.
  const ox = minx + (maxx - minx) / 2
  const oy = miny + (maxy - miny) / 2

  // Find max radius
  let maxr = 0
  for (let i = 0; i < n; i += 1) {
    const c = circles[i]
    const dx = c.x - ox
    const dy = c.y - oy
    const d = Math.sqrt(dx * dx + dy * dy) + c.r
    if (maxr < d) { maxr = d }
  }

  return {
    x: ox,
    y: oy,
    z: maxz,
    r: maxr
  }
}
