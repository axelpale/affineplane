const transitTo = require('../point3/transitTo')
const transitFrom = require('../point3/transitFrom')

module.exports = (box, origin, dw, dh, dd) => {
  // @affineplane.box3.resizeBy(box, origin, dw, dh, dd)
  //
  // Resize the box with respect to a fixed origin by the specified amounts.
  // For example, this allows resizing the box by its center point.
  // The operation does not change the box orientation.
  //
  // Parameters:
  //   box
  //     a box3, in the reference basis
  //   origin
  //     a point3, in the reference basis. The origin is allowed
  //     .. to be outside the box but will be capped to the nearest
  //     .. point within the box.
  //   dw
  //     a number, the width increase. Can be negative.
  //   dh
  //     a number, the height increase. Can be negative.
  //   dd
  //     a number, the depth increase. Can be negative.
  //
  // Return
  //   a box3
  //

  // Math derivation
  //
  // Let box0 be the point (0,0,0) of box.
  // We find a vector from the given pivot to the box0.
  // Scale the vector component-wise by how much the size relatively changes.
  // The scaled vector is how much we need to translate the box,
  // in order to keep the pivot fixed to the box pixel grid.
  //
  // See note 2023-02-18-18

  // Map origin in box basis to limit it.
  const ginBox = transitTo(origin, box)

  const ginCapBox = {
    x: Math.min(Math.max(ginBox.x, 0), box.w),
    y: Math.min(Math.max(ginBox.y, 0), box.h),
    z: Math.min(Math.max(ginBox.z, 0), box.d)
  }

  // Dimension scaling ratio.
  let xr, yr, zr
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
  if (box.d === 0) {
    zr = 0
  } else {
    zr = dd / box.d
  }

  // New (0,0,0) but in box basis
  const xyzBox = {
    x: -ginCapBox.x * xr,
    y: -ginCapBox.y * yr,
    z: -ginCapBox.z * zr
  }

  // New (0,0,0) in the reference basis
  const xyz = transitFrom(xyzBox, box)

  return {
    a: box.a,
    b: box.b,
    x: xyz.x,
    y: xyz.y,
    z: xyz.z,
    w: box.w + dw,
    h: box.h + dh,
    d: box.d + dd
  }
}
