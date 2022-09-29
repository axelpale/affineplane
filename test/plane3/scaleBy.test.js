const plane3 = require('../../lib/plane3')

module.exports = (ts) => {
  ts.test('case: basic scalings', (t) => {
    let plane, center

    plane = { a: 1, b: 0, x: 0, y: 0, z: 0 }
    center = { x: 0, y: 0, z: 0 }
    t.almostEqual(
      plane3.scaleBy(plane, center, 2),
      { a: 2, b: 0, x: 0, y: 0, z: 0 },
      'double scale'
    )
    t.almostEqual(
      plane3.scaleBy(plane, center, 0.5),
      { a: 0.5, b: 0, x: 0, y: 0, z: 0 },
      'half scale'
    )

    plane = { a: 1, b: 0, x: 0, y: 0, z: 0 }
    center = { x: 100, y: 100 } // note 2d center
    t.almostEqual(
      plane3.scaleBy(plane, center, 0.5),
      { a: 0.5, b: 0, x: 50, y: 50, z: 0 },
      'scaling about a point not on plane origin'
    )

    plane = { a: 1, b: 0, x: 100, y: 100, z: 10 }
    center = { x: 100, y: 100, z: 0 }
    t.almostEqual(
      plane3.scaleBy(plane, center, 0.5),
      { a: 0.5, b: 0, x: 100, y: 100, z: 5 },
      'scaling about plane origin but z offset'
    )

    t.end()
  })

  ts.test('case: prevent negative scale', (t) => {
    const plane = { a: 1, b: 0, x: 0, y: 0, z: 0 }
    const center = { x: 0, y: 0, z: 0 }

    t.throws(() => {
      plane3.scaleBy(plane, center, 0)
    }, Error, 'detect zero')

    t.throws(() => {
      plane3.scaleBy(plane, center, -1)
    }, Error, 'detect negative')

    t.end()
  })
}
