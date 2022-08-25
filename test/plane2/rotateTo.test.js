const plane2 = require('../../lib/plane2')

module.exports = (ts) => {
  ts.test('case: basic rotation to angle', (t) => {
    let plane, center, angle

    plane = { a: -1, b: 0, x: 0, y: 0 }
    center = { x: 0, y: 0 }
    angle = Math.PI / 2
    t.almostEqual(
      plane2.rotateTo(plane, center, angle),
      { a: 0, b: 1, x: 0, y: 0 },
      '270 deg rotation to angle'
    )

    plane = { a: 1, b: 0, x: 0, y: 0 }
    center = { x: 100, y: 100 }
    angle = Math.PI / 2
    t.almostEqual(
      plane2.rotateTo(plane, center, angle),
      { a: 0, b: 1, x: 200, y: 0 },
      '90 deg rotation around non-trivial point'
    )

    t.end()
  })
}
