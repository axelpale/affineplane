module.exports = (rect, rx, ry) => {
  // @affineplane.rect3.at(rect, rx, ry)
  //
  // Take a point on the rect, represented on the rects outer basis.
  //
  // Parameters
  //   rect
  //     a rect2
  //   rx
  //     horizontal distance from the top-left corner of the rectangle
  //     .. represented on the rects inner basis
  //   ry
  //     vertical distance from the top-left corner of the rectangle
  //     .. represented on the rects inner basis
  //
  // Return
  //   a point3, represented on the outer basis.
  //
  return {
    x: rect.basis.a * rx - rect.basis.b * ry + rect.basis.x,
    y: rect.basis.b * rx + rect.basis.a * ry + rect.basis.y,
    z: rect.basis.z
  }
}
