module.exports = (box, vec) => {
  // @affineplane.box3.translate(box, vec)
  //
  // Move the box by the given vector.
  // See affineplane.box3.offset to translate by scalars.
  //
  // Parameters:
  //   box
  //     a box3
  //   vec
  //     a vec3 or vec2
  //
  // Return
  //   a box3
  //
  return {
    a: box.a,
    b: box.b,
    x: box.x + vec.x,
    y: box.y + vec.y,
    z: box.z + (vec.z || 0),
    w: box.w,
    h: box.h,
    d: box.d
  }
}
