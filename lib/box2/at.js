module.exports = (box, rx, ry) => {
  // affineplane.box2.at(box, rx, ry)
  //
  // Take a point on the box, represented in the reference basis.
  //
  // Parameters
  //   box
  //     a box2
  //   rx
  //     horizontal distance from the top-left corner of the box
  //     .. represented on the box's inner basis.
  //     .. The unit of distance is same in the reference basis.
  //   ry
  //     vertical distance from the top-left corner of the box
  //     .. represented on the box's inner basis.
  //     .. The unit of distance is same in the reference basis.
  //
  // Return
  //   a point2 in the reference basis.
  //
  return {
    x: box.a * rx - box.b * ry + box.x,
    y: box.b * rx + box.a * ry + box.y
  }
}
