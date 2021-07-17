// Why abxywh? Why not just xywh?
// We cannot change the basis of a xywh rectangle freely.
// We cannot represent the rectangle in all bases, because
// the rectangle cannot rotate. Scaling of w h would be possible thou.
//

module.exports = (rect, sourceBasis, targetBasis) => {
  // Convert a rectangle between bases.
  //
  // Parameters
  //   rect
  //     a rectangle on the source basis.
  //   sourceBasis
  //     a ABXY, a transition from the source basis to
  //     the reference basis.
  //   targetBasis
  //     a ABXY, a transition from the target basis to
  //     the reference basis.
  //
  // Return
  //   the scalar on the targer basis.
  //
  const inv = inverse(targetBasis)
  const rel = multiply(inv, sourceBasis)
  const form = multiply(rel, rect)
  return {
    a: form.a,
    b: form.b,
    x: form.x,
    y: form.y,
    w: rect.w,
    h: rect.h
  }
}
