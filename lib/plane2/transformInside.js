module.exports = function (plane, tr, origin) {
  // affineplane.plane2.transformInside(plane, tr[, origin])
  //
  // Transform the plane with a Helmert transformation applied at the origin.
  // Same as affineplane.plane2.transform except the transform and the origin
  // are represented on the plane instead of the reference basis.
  //
  // Parameters:
  //   plane
  //     a plane2 on the reference basis
  //   tr
  //     a helm2 on the plane
  //   origin
  //     optional point2 on the plane. Default `{x:0,y:0}`.
  //     .. The transformation will be applied to the plane at this point.
  //
  // Return
  //   a plane2 on the reference plane
  //

  if (!origin) {
    origin = { x: 0, y: 0 }
  }

  // Math derivation
  //
  // We first convert the helmert transformation T to a plane T_o
  // by applying it to an identity plane around the origin.
  // See affineplane.plane2.fromHelmert for details.
  //
  //         a -b  tx
  //     T = b  a  ty
  //         0  0  1
  //
  //         a -b -a*ox+b*oy+tx+ox
  //   T_o = b  a -b*ox-a*oy+ty+oy
  //         0  0  1
  //
  // Then, because the T_o is defined on the plane P, meaning on the inner
  // basis of P, we apply T_o from inside and thus multiply P from the right.
  //
  //    P' = P * T_o
  //
  //         c -d  v   a -b -a*ox+b*oy+tx+ox
  //       = d  c  w * b  a -b*ox-a*oy+ty+oy
  //         0  0  1   0  0  1
  //
  //         a*c-b*d  -a*d-b*c  c*(-a*ox+b*oy+tx+ox)-d*(-b*ox-a*oy+ty+oy)+v
  //       = b*c+a*d  -b*d+a*c  d*(-a*ox+b*oy+tx+ox)+c*(-b*ox-a*oy+ty+oy)+w
  //         0         0        1
  //
  const a = tr.a
  const b = tr.b
  const c = plane.a
  const d = plane.b
  const v = plane.x
  const w = plane.y
  const ox = origin.x
  const oy = origin.y

  const tox = -a * ox + b * oy + tr.x + ox
  const toy = -b * ox - a * oy + tr.y + oy

  return {
    a: a * c - b * d,
    b: a * d + b * c,
    x: c * tox - d * toy + v,
    y: d * tox + c * toy + w
  }
}
