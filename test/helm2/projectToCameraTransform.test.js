const helm2 = require('../../lib/helm2')

module.exports = (ts) => {
  ts.test('case: project to camera transform', (t) => {
    let tr, origin, plane, camera

    tr = { a: 1, b: 0, x: 0, y: 0 }
    origin = { x: 0, y: 0, z: 0 }
    plane = { a: 1, b: 0, x: 0, y: 0, z: 0 }
    camera = { x: 0, y: 0, z: -1 }
    t.almostEqualHelmert(
      helm2.projectToCameraTransform(tr, origin, plane, camera),
      { a: 1, b: 0, x: 0, y: 0, z: 0 },
      'trivial noop projection'
    )

    tr = { a: 2, b: 0, x: 0, y: 0 }
    origin = { x: 0, y: 0, z: 0 }
    plane = { a: 1, b: 0, x: 0, y: 0, z: 0 }
    camera = { x: 0, y: 0, z: -1 }
    t.almostEqualHelmert(
      helm2.projectToCameraTransform(tr, origin, plane, camera),
      { a: 1, b: 0, x: 0, y: 0, z: 0.5 },
      'transform on the plane, travel a bit closer'
    )

    tr = { a: 0, b: 2, x: 2, y: 2 }
    origin = { x: 0, y: 0, z: 2 }
    plane = { a: 1, b: 0, x: 0, y: 0, z: 1 }
    camera = { x: 0, y: 0, z: 0 }
    t.almostEqualHelmert(
      helm2.projectToCameraTransform(tr, origin, plane, camera),
      { a: 0, b: -1, x: -1, y: -1, z: 1 },
      'should invert rotation and invert and scale translation'
    )

    tr = { a: 0, b: 0, x: 2, y: 2 }
    t.almostEqualHelmert(
      helm2.projectToCameraTransform(tr, origin, plane, camera),
      { a: 1, b: 0, x: 0, y: 0, z: 0 },
      'should handle singular helmert'
    )

    t.end()
  })
}
