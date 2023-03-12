const sin = Math.sin
const cos = Math.cos

module.exports = (sp, dist, theta) => {
  // @affineplane.sphere2.polarOffset(sphere, distance, theta)
  //
  // Offset a sphere by the given distance towards the direction given by
  // the theta angles.
  //
  // Parameters:
  //   sphere
  //     a sphere2
  //   distance
  //     a number, the distance from p.
  //   theta
  //     a number, the angle around z-axis, the azimuthal angle.
  //     .. Clockwise rotation, following the right-hand rule.
  //
  // Return
  //   a sphere2
  //
  return {
    x: sp.x + dist * cos(theta),
    y: sp.y + dist * sin(theta),
    r: sp.r
  }
}
