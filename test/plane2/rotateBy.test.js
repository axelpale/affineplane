const plane2 = require('../../lib/plane2')
const helm2 = require('../../lib/helm2')

module.exports = (ts) => {
  ts.test('case: smoke', (t) => {
    const plane = { a: 1, b: 0, x: 0, y: 0 }
    const center = { x: 0, y: 0 }
    const angle = Math.PI / 2
    t.almostEqual(
      plane2.rotateBy(plane, center, angle),
      { a: 0, b: 1, x: 0, y: 0 },
      'rotation by 90 deg'
    )

    t.end()
  })

  ts.test('case: basic rotations', (t) => {
    let plane, center, angle

    plane = { a: -1, b: 0, x: 0, y: 0 }
    center = { x: 0, y: 0 }
    angle = -Math.PI
    t.almostEqual(
      plane2.rotateBy(plane, center, angle),
      helm2.IDENTITY,
      'rotation by -180 deg'
    )

    plane = helm2.IDENTITY
    center = { x: 0, y: 0 }
    angle = 0
    t.almostEqual(
      plane2.rotateBy(plane, center, angle),
      helm2.IDENTITY,
      'rotation by 0 deg'
    )

    plane = helm2.IDENTITY
    center = { x: 100, y: 100 }
    angle = Math.PI
    t.almostEqual(
      plane2.rotateBy(plane, center, angle),
      { a: -1, b: 0, x: 200, y: 200 },
      'around non-trivial center'
    )

    t.end()
  })
}
