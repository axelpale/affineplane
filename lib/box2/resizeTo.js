const resizeBy = require('./resizeBy')

module.exports = (box, origin, width, height) => {
  // @affineplane.box2.resizeTo(box, origin, width, height)
  //
  // Resize the box to the given width and height.
  // The origin point stays fixed relative to the box size.
  // For example, this allows resizing the box by its center point.
  // The operation does not change the box orientation.
  //
  // Parameters:
  //   box
  //     a box2, in the reference basis
  //   origin
  //     a point2, in the reference basis. The origin is allowed
  //     .. to be outside the box but will be capped to the nearest point
  //     .. within the box.
  //   width
  //     a positive number, the new width.
  //   height
  //     a positive number, the new height.
  //
  // Return
  //   a box2
  //
  const dw = width - box.w
  const dh = height - box.h
  return resizeBy(box, origin, dw, dh)
}
