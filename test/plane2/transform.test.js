const plane2 = require('../../lib/plane2')

module.exports = (ts) => {
  ts.test('case: basic transform', (t) => {
    const plane = { a: 1, b: 0, x: 1, y: 1 }
    const tr = { a: 0, b: 2, x: 2, y: 2 }

    t.deepEqual(
      plane2.transform(plane, tr),
      { a: 0, b: 2, x: 0, y: 4 },
      'rotate, scale, and translate'
    )

    t.end()
  })

  ts.test('case: transform about origin', (t) => {
    const plane = { a: 1, b: 0, x: 0, y: 0 }
    let tr = { a: 0, b: 1, x: 0, y: 0 }
    const origin = { x: 1, y: 0 }

    t.deepEqual(
      plane2.transform(plane, tr, origin),
      { a: 0, b: 1, x: 1, y: -1 },
      'rotate around non-zero origin'
    )

    // Add some translation
    tr = { a: 0, b: 1, x: 2, y: -2 }
    t.deepEqual(
      plane2.transform(plane, tr, origin),
      { a: 0, b: 1, x: 3, y: -3 },
      'translate and rotate around non-zero origin'
    )

    t.end()
  })
}
