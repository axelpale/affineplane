const EPSILON = require('../epsilon')

module.exports = (plane, origin, deltaDepth) => {
  // @affineplane.plane3.projectByDepth(plane, origin, deltaDepth)
  //
  // Project a plane so that it translates by
  // the given delta depth from the origin.
  // The plane is also scaled so that it would look
  // similar from the origin point of view.
  //
  // If the origin point is on the plane,
  // not projection is made and the given plane is returned as-is.
  //
  // Parameters:
  //   plane
  //     a plane3 in the reference basis.
  //   origin
  //     a point3 in the reference basis.
  //   deltaDepth
  //     a number, can be negative.
  //
  // Return:
  //   a plane3 in the reference basis.
  //

  // From origin to plane
  const deltaToPlane = plane.z - origin.z
  // From origin to the target depth
  const deltaToDepth = deltaToPlane + deltaDepth

  if (Math.abs(deltaToPlane) < EPSILON) {
    // Origin on the plane. Cannot project by depth.
    return plane
  }

  // Find scaling ratio.
  const m = deltaToDepth / deltaToPlane

  return {
    a: m * plane.a,
    b: m * plane.b,
    x: m * plane.x + (1 - m) * origin.x,
    y: m * plane.y + (1 - m) * origin.y,
    z: m * plane.z + (1 - m) * origin.z
  }
}
