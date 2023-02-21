module.exports = (box, x, y, z) => {
  // @affineplane.box3.atBox(box, x, y, z)
  //
  // Take a point in the reference basis and represent it in the box basis.
  // This is like affineplane.box3.at but to the other direction.
  //
  // Parameters
  //   box
  //     a box3
  //   x
  //     horizontal coordinate in the reference basis.
  //   y
  //     vertical coordinate in the reference basis.
  //   z
  //     depth coordinate in the reference basis.
  //
  // Return
  //   a point3 in the box basis.
  //

  // Math derivation:
  //   Begin with box.at formula:
  //     x = box.a * bx - box.b * by + box.x,
  //     y = box.b * bx + box.a * by + box.y,
  //     z = bz + box.z
  //   Represent x and y in vectors, z is independent.
  //     xy = B * bxy
  //     <=> bxy = invB * xy
  //
  // Inverse of box
  //   invB = | box.a   box.b  -(box.a * box.x + box.b * box.y)  |
  //          | -box.b  box.a  -(-box.b * box.x + box.a * box.y) |
  //          | 0       0      1
  //
  // And xy = transpose(| x y 1 |)
  //
  // Thus invB * xy:
  //   bx =  box.a * x + box.b * y - box.a * box.x - box.b * box.y
  //   by = -box.b * x + box.a * y + box.b * box.x - box.a * box.y
  //
  // Deal with bz separately.
  //   z = bz + box.z <=> bz = z - box.z

  return {
    x: box.a * x + box.b * y - box.a * box.x - box.b * box.y,
    y: -box.b * x + box.a * y + box.b * box.x - box.a * box.y,
    z: z - box.z
  }
}
