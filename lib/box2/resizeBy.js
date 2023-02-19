const point2 = require('../point2')

module.exports = (box, origin, dw, dh) => {
  // @affineplane.box2.resizeBy(box, origin, dw, dh)
  //
  // Resize the box with respect to a fixed origin by the specified amounts.
  // The operation does not change the box orientation.
  //
  // Parameters:
  //   box
  //     a box2, in the reference basis
  //   origin
  //     a point2, in the reference basis. The origin is allowed
  //     .. to be outside the box but will be capped to the nearest point
  //     .. within the box.
  //   dw
  //     a number, the width increase. Can be negative.
  //   dh
  //     a number, the height increase. Can be negative.
  //
  // Return
  //   a box2
  //

  // Math derivation
  //
  // Let box0 be the point (0,0) of box.
  // We find a vector from the given pivot to the box0.
  // Scale the vector component-wise by how much the size relatively changes.
  // The scaled vector is how much we need to translate the box,
  // in order to keep the pivot fixed to the box pixel grid.
  //
  // See note 2023-02-18-18

  // Map origin in box basis to limit it.
  const ginBox = point2.transitTo(origin, box)

  const ginCapBox = {
    x: Math.min(Math.max(ginBox.x, 0), box.w),
    y: Math.min(Math.max(ginBox.y, 0), box.h)
  }

  // DEBUG
  // console.log(box, origin, dw, dh)
  // console.log(ginBox, ginCapBox)

  // Dimension scaling ratio.
  let xr, yr
  // Deal with empty box
  if (box.w === 0) {
    xr = 0
  } else {
    xr = dw / box.w
  }
  if (box.h === 0) {
    yr = 0
  } else {
    yr = dh / box.h
  }

  // New (0,0) but in box basis
  const xyBox = {
    x: -ginCapBox.x * xr,
    y: -ginCapBox.y * yr
  }

  // New (0,0) in the reference basis
  const xy = point2.transitFrom(xyBox, box)

  return {
    a: box.a,
    b: box.b,
    x: xy.x,
    y: xy.y,
    w: box.w + dw,
    h: box.h + dh
  }
}
