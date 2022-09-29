const plane3 = require('../../lib/plane3')

module.exports = (ts) => {
  ts.test('case: basic scalings', (t) => {
    let plane, center

    plane = { a: 1, b: 0, x: 0, y: 0, z: 1 }
    center = { x: 0, y: 0 }
    t.almostEqual(
      plane3.scaleTo(plane, center, 2),
      { a: 2, b: 0, x: 0, y: 0, z: 1 },
      'double scale, 2d center on the plane thus z preserved'
    )

    plane = { a: 0, b: 2, x: 100, y: 100, z: 100 }
    center = { x: 100, y: 100, z: 0 }
    t.almostEqual(
      plane3.scaleTo(plane, center, 1),
      { a: 0, b: 1, x: 100, y: 100, z: 50 },
      'scaling about plane origin with z offset'
    )

    t.end()
  })

  ts.test('case: prevent negative scale', (t) => {
    const plane = { a: 1, b: 0, x: 0, y: 0, z: 0 }
    const center = { x: 0, y: 0, z: 0 }

    t.throws(() => {
      plane3.scaleTo(plane, center, 0)
    }, Error, 'detect zero')

    t.throws(() => {
      plane3.scaleTo(plane, center, -1)
    }, Error, 'detect negative')

    t.end()
  })
}
