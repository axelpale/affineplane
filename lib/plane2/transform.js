module.exports = function (plane, tr, origin) {
  // @affineplane.plane2.transform(plane, tr[, origin])
  //
  // Transform the plane with a helmert transformation applied at origin.
  //
  // Parameters:
  //   plane
  //     a plane2 on the reference basis
  //   tr
  //     a helm2 on the reference basis
  //   origin
  //     optional point2 on the reference basis. Default `{x:0,y:0}`.
  //     .. The transformation will be applied to the plane at this point.
  //
  // Return
  //   a plane2 on the reference plane
  //

  if (!origin) {
    origin = { x: 0, y: 0 }
  }

  // Basically, we first convert the helmert transformation T to a plane T_o
  // by applying it to an identity plane around the origin. See fromHelmert.
  //
  //         a -b  tx
  //     T = b  a  ty
  //         0  0  1
  //
  //         a -b -a*ox+b*oy+tx+ox
  //   T_o = b  a -b*ox-a*oy+ty+oy
  //         0  0  1
  //
  // Then, because the converted plane is defined on the reference and
  // applied to the plane outside, we multiply the given plane from the left.
  //
  //    P' = T_o * P
  //
  //         a -b -a*ox+b*oy+tx+ox   c -d  v
  //       = b  a -b*ox-a*oy+ty+oy * d  c  w
  //         0  0  1                 0  0  1
  //
  //         a*c-b*d  -a*d-b*c  a*v-b*w-a*ox+b*oy+tx+ox
  //       = b*c+a*d  -b*d+a*c  b*v+a*w-b*ox-a*oy+ty+oy
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

  return {
    a: a * c - b * d,
    b: a * d + b * c,
    x: a * v - b * w - a * ox + b * oy + tr.x + ox,
    y: b * v + a * w - b * ox - a * oy + tr.y + oy
  }
}
