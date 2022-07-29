
module.exports = (v, w) => {
  // Parameters
  //   v
  //     a rigid3
  //   w
  //     a rigid3
  //
  // Return
  //   a rigid3
  //

  // WE COULD DO THIS:
  // const round = Math.PI * 2
  // // Special handling with rotation: keep in [0, 2*PI]
  // const r = v.r + w.r
  // // Take care of JS negative modulo.
  // // See https://stackoverflow.com/a/4467559/638546
  // r: ((r % round) + round) % round
  // HOWEVER
  // - if we take the rotation as a dynamic movement,
  //   the r dimension can be regarded as rotational force.
  // - the force should have no artificial gap as a "round".
  // - thus treat r as a rotational force
  // METACOMMENT
  // This approach underlines that the lib is about affine plane dynamics,
  // not just simple geometry. In applications, dimension t could be
  // possible.

  return {
    x: v.x + w.x,
    y: v.y + w.y,
    z: v.z + w.z,
    r: v.r + w.r // see modulo note above.
  }
}
