const plane3 = require('../../lib/plane3')

module.exports = (ts) => {
  ts.test('case: basic transformInside', (t) => {
    const plane = { a: 1, b: 0, x: 1, y: 1, z: 1 }
    const tr = { a: 0, b: 2, x: 2, y: 2, z: 2 }

    t.deepEqual(
      plane3.transformInside(plane, tr),
      { a: 0, b: 2, x: 3, y: 3, z: 3 },
      'rotate, scale, and translate'
    )

    t.end()
  })

  ts.test('case: transformInside about origin', (t) => {
    const plane = { a: 1, b: 0, x: 1, y: 1, z: 1 }
    const tr = { a: 0, b: 2, x: 2, y: 2, z: 2 }
    const origin = { x: 1, y: 0, z: 1 }
    // Tip: draw it out. See note 2022-12-03-22

    t.deepEqual(
      plane3.transformInside(plane, tr, origin),
      { a: 0, b: 2, x: 4, y: 1, z: 3 },
      'rotate around non-zero origin'
    )

    t.end()
  })
}
