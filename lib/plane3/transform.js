module.exports = function (plane, tr, origin) {
  // affineplane.plane3.transform(plane, tr[, origin])
  // affineplane.plane3.transformBy
  //
  // Transform the plane with a helmert transformation applied at origin.
  //
  // Parameters:
  //   plane
  //     a plane3 on the reference basis
  //   tr
  //     a helm2 or helm3 on the reference basis
  //   origin
  //     optional point3 on the reference basis. Default `{x:0,y:0,z:0}`.
  //     .. The transformation will be applied to the plane at this point.
  //
  // Return
  //   a plane3 on the reference basis
  //

  if (!origin) {
    origin = { x: 0, y: 0, z: 0 }
  }

  // Basically, we first convert the helmert transformation T to a plane T_o
  // by applying it to an identity plane around the origin. See fromHelmert.
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
  // Then, because the converted plane T_o is on the outer basis,
  // we multiply the given plane from the left.
  //
  //    P' = T_o * P
  //
  //         a -b  0 -a*ox+b*oy+tx+ox   c -d  0  px
  //       = b  a  0 -b*ox-a*oy+ty+oy * d  c  0  py
  //         0  0  m -m*oz+tz+oz        0  0  n  pz
  //         0  0  0  1                 0  0  0  1
  //
  //         a*c-b*d  -a*d-b*c  0    a*px-b*py-a*ox+b*oy+tx+ox
  //       = b*c+a*d  -b*d+a*c  0    b*px+a*py-b*ox-a*oy+ty+oy
  //         0         0        m*n  m*pz-m*oz+tz+oz
  //         0         0        0    1
  //

  const a = tr.a
  const b = tr.b
  const tz = (tr.z ? tr.z : 0)
  const c = plane.a
  const d = plane.b
  const px = plane.x
  const py = plane.y
  const pz = plane.z
  const ox = origin.x
  const oy = origin.y
  const oz = (origin.z ? origin.z : 0)
  const m = Math.sqrt(a * a + b * b)

  return {
    a: a * c - b * d,
    b: a * d + b * c,
    x: a * px - b * py - a * ox + b * oy + tr.x + ox,
    y: b * px + a * py - b * ox - a * oy + tr.y + oy,
    z: m * pz - m * oz + tz + oz
  }
}
