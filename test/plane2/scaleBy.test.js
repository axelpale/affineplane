const plane2 = require('../../lib/plane2')

module.exports = (ts) => {
  ts.test('case: basic scalings', (t) => {
    let plane, center

    plane = { a: 1, b: 0, x: 0, y: 0 }
    center = { x: 0, y: 0 }
    t.almostEqual(
      plane2.scaleBy(plane, center, 2),
      { a: 2, b: 0, x: 0, y: 0 },
      'double scale'
    )
    t.almostEqual(
      plane2.scaleBy(plane, center, 0.5),
      { a: 0.5, b: 0, x: 0, y: 0 },
      'half scale'
    )

    plane = { a: 1, b: 0, x: 0, y: 0 }
    center = { x: 100, y: 100 }
    t.almostEqual(
      plane2.scaleBy(plane, center, 0.5),
      { a: 0.5, b: 0, x: 50, y: 50 },
      'scaling about a point not on plane origin'
    )

    plane = { a: 1, b: 0, x: 100, y: 100 }
    center = { x: 100, y: 100 }
    t.almostEqual(
      plane2.scaleBy(plane, center, 0.5),
      { a: 0.5, b: 0, x: 100, y: 100 },
      'scaling about plane origin'
    )

    t.end()
  })

  ts.test('case: prevent negative scale', (t) => {
    const plane = { a: 1, b: 0, x: 0, y: 0 }
    const center = { x: 0, y: 0 }

    t.throws(() => {
      plane2.scaleBy(plane, center, 0)
    }, Error, 'detect zero')

    t.throws(() => {
      plane2.scaleBy(plane, center, -1)
    }, Error, 'detect negative')

    t.end()
  })
}
