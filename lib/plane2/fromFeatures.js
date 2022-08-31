module.exports = (feats) => {
  // affineplane.plane2.fromFeatures(feats)
  //
  // Create a plane from human readable features.
  //
  // Parameters:
  //   feats
  //     an object with optional props:
  //       angle
  //         a number, angle in radians with respect to the reference plane.
  //       scale
  //         a number, scale multiplier with respect to the reference plane.
  //       origin
  //         a point2, the plane origin point on the reference plane.
  //
  // Return
  //   a plane2
  //
  if (typeof feats !== 'object') {
    throw new Error('invalid plane feature object')
  }

  let angle, scale, ox, oy

  if (typeof feats.angle !== 'number') {
    angle = 0
  } else {
    angle = feats.angle
  }

  if (typeof feats.scale !== 'number') {
    scale = 1
  } else {
    scale = feats.scale
  }

  if (typeof feats.origin !== 'object') {
    ox = 0
    oy = 0
  } else {
    ox = feats.origin.x
    oy = feats.origin.y
  }

  return {
    a: scale * Math.cos(angle),
    b: scale * Math.sin(angle),
    x: ox,
    y: oy
  }
}
