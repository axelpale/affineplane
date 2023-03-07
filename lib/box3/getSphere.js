const at = require('./at')

module.exports = (box) => {
  // @affineplane.box3.getSphere(box)
  //
  // Get the circumscribed sphere of the box. In other words, get the sphere
  // that contains the box so that the box corners are on the sphere.
  // The resulting sphere is also the minimum bounding sphere of the box.
  //
  // Parameters
  //   box
  //     a box3, in the reference basis.
  //
  // Return
  //   a sphere3
  //

  // Sphere center
  const hw = box.w / 2
  const hh = box.h / 2
  const hd = box.d / 2
  const p = at(box, hw, hh, hd)
  // Patch radius
  p.r = Math.sqrt(hw * hw + hh * hh + hd * hd)

  return p
}
