module.exports = (seg) => {
  // @affineplane.segment3.toVector(seg)
  //
  // Convert segment to a vector from the first to the second segment point.
  //
  // Parameter
  //   seg
  //     a segment3
  //
  // Return
  //   a vec3
  //
  return {
    x: seg[1].x - seg[0].x,
    y: seg[1].y - seg[0].y,
    z: seg[1].z - seg[0].z
  }
}
