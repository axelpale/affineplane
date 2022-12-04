module.exports = function (plane, tr, origin) {
  // affineplane.plane3.transformInside(plane, tr[, origin])
  //
  // Transform the plane with a Helmert transformation applied at the origin.
  // Same as affineplane.plane3.transform except the transform and the origin
  // are represented on the plane instead of the reference basis.
  //
  // Parameters:
  //   plane
  //     a plane3 on the reference basis
  //   tr
  //     a helm3 on the plane
  //   origin
  //     optional point3 on the plane. Default `{x:0,y:0,z:0}`.
  //     .. The transformation will be applied to the plane at this point.
  //
  // Return
  //   a plane3 on the reference plane
  //

  if (!origin) {
    origin = { x: 0, y: 0, z: 0 }
  }

  // Math derivation
  //
  // We first convert the helmert transformation T to a plane T_o
  // by applying it to an identity plane around the origin.
  // See affineplane.plane3.fromHelmert for details.
  //
  //         a -b  0  tx
  //     T = b  a  0  ty
  //         0  0  m  tz
  //         0  0  0  1
  //
  //         a -b  0 -a*ox+b*oy+tx+ox
  //   T_o = b  a  0 -b*ox-a*oy+ty+oy
  //         0  0  m -m*oz+tz+oz
  //         0  0  0  1
  //
  // Then, because the T_o is defined on the plane P, meaning on the inner
  // basis of P, we apply T_o from inside and thus multiply P from the right.
  //
  //   P' = P * T_o
  //
  //        c -d  0  px   a -b  0 -a*ox+b*oy+tx+ox
  //      = d  c  0  py * b  a  0 -b*ox-a*oy+ty+oy
  //        0  0  n  pz   0  0  m -m*oz+tz+oz
  //        0  0  0  1    0  0  0  1
  //
  //        a*c-b*d  -a*d-b*c  0    c*(-a*ox+b*oy+tx+ox)-d*(-b*ox-a*oy+ty+oy)+px
  //      = b*c+a*d  -b*d+a*c  0    d*(-a*ox+b*oy+tx+ox)+c*(-b*ox-a*oy+ty+oy)+py
  //        0         0        n*m  n*(-m*oz+tz+oz)+pz
  //        0         0        0    1
  //
  const a = tr.a
  const b = tr.b
  const m = Math.sqrt(a * a + b * b)
  const c = plane.a
  const d = plane.b
  const n = Math.sqrt(c * c + d * d)
  const px = plane.x
  const py = plane.y
  const pz = plane.z
  const ox = origin.x
  const oy = origin.y
  const oz = origin.y

  const tox = -a * ox + b * oy + tr.x + ox
  const toy = -b * ox - a * oy + tr.y + oy
  const toz = -m * oz + tr.z + oz

  return {
    a: a * c - b * d,
    b: a * d + b * c,
    x: c * tox - d * toy + px,
    y: d * tox + c * toy + py,
    z: n * toz + pz
  }
}
