const at = require('./at')

module.exports = (box) => {
  // affineplane.box2.getPath(box)
  // affineplane.box2.getPoints
  // affineplane.box2.getPolygon
  //
  // Get the box corner points as a path. Points are in clock-wise order.
  //
  // Parameters:
  //   box
  //
  // Return
  //   a path2
  //
  return [
    at(box, 0, 0),
    at(box, box.w, 0),
    at(box, box.w, box.h),
    at(box, 0, box.h)
  ]
}
