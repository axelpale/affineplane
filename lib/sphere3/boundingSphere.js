module.exports = (spheres) => {
  // @affineplane.sphere3.boundingSphere(spheres)
  //
  // Find a sphere that encloses all the given spheres.
  // The result is approximate but is quaranteed to contain the optimal
  // bounding sphere.
  //
  // Parameters
  //   spheres
  //     an array of sphere3
  //
  // Return
  //   a sphere3
  //

  const n = spheres.length
  if (n === 0) {
    throw new Error('Cannot compute bounding sphere for empty set of spheres.')
  }

  // Find bounding box
  const c0 = spheres[0]
  let minx = c0.x - c0.r
  let maxx = c0.x + c0.r
  let miny = c0.y - c0.r
  let maxy = c0.y + c0.r
  let minz = c0.z - c0.r
  let maxz = c0.z + c0.r
  for (let i = 1; i < n; i += 1) {
    const c = spheres[i]
    const mix = c.x - c.r
    const max = c.x + c.r
    const miy = c.y - c.r
    const may = c.y + c.r
    const miz = c.z - c.r
    const maz = c.z + c.r
    if (mix < minx) { minx = mix }
    if (max > maxx) { maxx = max }
    if (miy < miny) { miny = miy }
    if (may > maxy) { maxy = may }
    if (miz < minz) { minz = miz }
    if (maz > maxz) { maxz = maz }
  }

  // TODO Find better bounding box

  // Find the center of the bounding box.
  const ox = minx + (maxx - minx) / 2
  const oy = miny + (maxy - miny) / 2
  const oz = minz + (maxz - minz) / 2

  // Find max radius
  let maxr = 0
  for (let i = 0; i < n; i += 1) {
    const c = spheres[i]
    const dx = c.x - ox
    const dy = c.y - oy
    const dz = c.z - oz
    const d = Math.sqrt(dx * dx + dy * dy + dz * dz) + c.r
    if (maxr < d) { maxr = d }
  }

  return {
    x: ox,
    y: oy,
    z: oz,
    r: maxr
  }
}
