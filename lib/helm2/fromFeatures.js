module.exports = (feats) => {
  // affineplane.helm2.fromFeatures(feats)
  //
  // Create a helm3 transformation from human-readable features.
  //
  // Parameters:
  //   feats
  //     object with properties:
  //       dilation
  //         a number, a multiplier
  //       rotation
  //         a number, in radians
  //       translation
  //         a vec2, the displacement vector
  //
  // Return:
  //   helm3
  //
  const s = feats.dilation ? feats.dilation : 1
  const r = feats.rotation ? feats.rotation : 0
  const tl = feats.translation ? feats.translation : { x: 0, y: 0 }
  return {
    a: s * Math.cos(r),
    b: s * Math.sin(r),
    x: tl.x,
    y: tl.y
  }
}
