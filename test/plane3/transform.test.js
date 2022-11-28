const plane3 = require('../../lib/plane3')

module.exports = (ts) => {
  ts.test('case: basic transform', (t) => {
    const plane = { a: 1, b: 0, x: 1, y: 1, z: 1 }
    const tr = { a: 0, b: 2, x: 2, y: 2, z: 2 }

    t.deepEqual(
      plane3.transform(plane, tr),
      { a: 0, b: 2, x: 0, y: 4, z: 4 },
      'rotate, scale, and translate'
    )

    t.deepEqual(
      plane3.transformBy(plane, tr),
      plane3.transform(plane, tr),
      'alias'
    )

    t.end()
  })

  ts.test('case: transform about origin', (t) => {
    const plane = { a: 1, b: 0, x: 0, y: 0, z: 0 }
    let tr = { a: 0, b: 1, x: 0, y: 0, z: 0 }
    let origin = { x: 1, y: 0, z: 0 }

    t.deepEqual(
      plane3.transform(plane, tr, origin),
      { a: 0, b: 1, x: 1, y: -1, z: 0 },
      'rotate around non-zero origin'
    )

    // Add some translation
    tr = { a: 0, b: 1, x: 2, y: -2, z: 2 }
    t.deepEqual(
      plane3.transform(plane, tr, origin),
      { a: 0, b: 1, x: 3, y: -3, z: 2 },
      'translate and rotate around non-zero origin'
    )

    tr = { a: 2, b: 0, x: 0, y: 0, z: 0 }
    origin = { x: 1, y: 1, z: 1 }
    t.deepEqual(
      plane3.transform(plane, tr, origin),
      { a: 2, b: 0, x: -1, y: -1, z: -1 },
      'dilation about off-plane origin'
    )

    t.end()
  })
}
