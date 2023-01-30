module.exports = (box, rx, ry, rz) => {
  // affineplane.box3.at(box, rx, ry, rz)
  //
  // Take a point on the box, represented in the reference basis.
  //
  // Parameters
  //   box
  //     a box3
  //   rx
  //     horizontal distance from the left side of the box
  //     .. represented on the box's inner basis.
  //     .. The unit of distance is same in the reference basis
  //     .. because the box has fixed scale of 1.
  //   ry
  //     vertical distance from the top side of the box
  //     .. represented on the box's inner basis.
  //     .. The unit of distance is same in the reference basis.
  //   rz
  //     distal distance from the front side of the box
  //     .. represented on the box's inner basis.
  //     .. The unit of distance is same in the reference basis.
  //
  // Return
  //   a point3 in the reference basis.
  //
  return {
    x: box.a * rx - box.b * ry + box.x,
    y: box.b * rx + box.a * ry + box.y,
    z: rz + box.z // assume scale 1
  }
}
