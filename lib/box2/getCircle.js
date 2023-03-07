const at = require('./at')

module.exports = (box) => {
  // @affineplane.box2.getCircle(box)
  // @affineplane.box2.getSphere
  //
  // Get the circumscribed circle of the box. In other words, get the circle
  // that contains the box so that the box corners are on it.
  // The resulting circle is also the minimum bounding circle of the box.
  //
  // Parameters
  //   box
  //     a box2, in the reference basis.
  //
  // Return
  //   a sphere2
  //

  // Circle center
  const hw = box.w / 2
  const hh = box.h / 2
  const p = at(box, hw, hh)
  // Patch radius
  p.r = Math.sqrt(hw * hw + hh * hh)

  return p
}
