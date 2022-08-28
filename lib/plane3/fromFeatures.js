module.exports = (feats) => {
  // affineplane.plane3.fromFeatures(feats)
  //
  // Create a plane from human readable features.
  //
  // Parameters:
  //   feats
  //     an object with optional props
  //       angle
  //         a number, angle in radians with respect to the reference plane.
  //       scale
  //         a number, scale multiplier with respect to the reference plane.
  //       origin
  //         a point3, the plane origin point in the reference space.
  //
  // Return
  //   a plane3
  //
  if (typeof feats !== 'object') {
    throw new Error('invalid plane feature object')
  }

  let angle, scale, x, y, z

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
    x = 0
    y = 0
    z = 0
  } else {
    x = feats.origin.x
    y = feats.origin.y
    z = feats.origin.z
  }

  return {
    a: scale * Math.cos(angle),
    b: scale * Math.sin(angle),
    x: x,
    y: y,
    z: z
  }
}
