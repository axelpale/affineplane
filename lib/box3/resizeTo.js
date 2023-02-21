const resizeBy = require('./resizeBy')

module.exports = (box, origin, width, height, depth) => {
  // @affineplane.box3.resizeTo(box, origin, width, height, depth)
  //
  // Resize the box to the given width, height, and depth.
  // The origin point stays fixed relative to the box size.
  // For example, this allows resizing the box by its center point.
  // The operation does not change the box orientation.
  //
  // Parameters:
  //   box
  //     a box3, in the reference basis
  //   origin
  //     a point3, in the reference basis. The origin is allowed
  //     .. to be outside the box but will be capped to the nearest point
  //     .. within the box.
  //   width
  //     a positive number, the new width.
  //   height
  //     a positive number, the new height.
  //   depth
  //     a positive number, the new depth.
  //
  // Return
  //   a box3
  //
  const dw = width - box.w
  const dh = height - box.h
  const dd = depth - box.d
  return resizeBy(box, origin, dw, dh, dd)
}
