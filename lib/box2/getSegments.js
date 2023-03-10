const at = require('./at')

module.exports = (box) => {
  // @affineplane.box2.getSegments(box)
  //
  // Get the four line segments of the box.
  //
  // Parameters:
  //   box
  //     a box2, in the reference basis.
  //
  // Return
  //   array of segment2, each segment in the reference basis.
  //
  const c00 = at(box, 0, 0)
  const cW0 = at(box, box.w, 0)
  const cWH = at(box, box.w, box.h)
  const c0H = at(box, 0, box.h)

  return [
    [c00, cW0],
    [cW0, cWH],
    [cWH, c0H],
    [c0H, c00]
  ]
}
