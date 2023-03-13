const sin = Math.sin
const cos = Math.cos

module.exports = (sp, dist, theta, phi) => {
  // @affineplane.sphere3.polarOffset(sphere, distance, theta[, phi])
  //
  // Offset a sphere by the given distance towards the direction given by
  // the spherical theta and phi angles.
  //
  // Parameters:
  //   sphere
  //     a sphere3
  //   distance
  //     a number, the distance from p.
  //   theta
  //     a number, the angle around z-axis, the azimuthal angle.
  //     .. Clockwise rotation, following the right-hand rule.
  //   phi
  //     optional number, default π/2. The polar angle in radians
  //     .. measured from the positive z-axis.
  //
  // Return
  //   a sphere3
  //

  if (typeof phi !== 'number') {
    return {
      x: sp.x + dist * cos(theta),
      y: sp.y + dist * sin(theta),
      z: sp.z,
      r: sp.r
    }
  }

  return {
    x: sp.x + dist * cos(theta) * sin(phi),
    y: sp.y + dist * sin(theta) * sin(phi),
    z: sp.z + dist * cos(phi),
    r: sp.r
  }
}
