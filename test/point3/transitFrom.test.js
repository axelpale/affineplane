const point3 = require('../../lib/point3')

module.exports = (ts) => {
  ts.test('case: trivial', (t) => {
    const plane = { a: 1, b: 0, x: 0, y: 0, z: 0 }

    t.deepEqual(
      point3.transitFrom({ x: 0, y: 0, z: 0 }, plane),
      { x: 0, y: 0, z: 0 },
      'zero point'
    )
    t.deepEqual(
      point3.transitFrom({ x: 1, y: 1, z: 1 }, plane),
      { x: 1, y: 1, z: 1 },
      'unit point'
    )

    t.end()
  })

  ts.test('case: basic', (t) => {
    const planea = { a: 1, b: 0, x: 1, y: 1, z: 1 }
    t.deepEqual(
      point3.transitFrom({ x: 0, y: 0, z: 0 }, planea),
      { x: 1, y: 1, z: 1 },
      'relative to the reference plane'
    )

    const planeb = { a: 2, b: 0, x: 1, y: 1, z: 1 }
    t.deepEqual(
      point3.transitFrom({ x: 1, y: 1, z: 1 }, planeb),
      { x: 3, y: 3, z: 3 },
      'scale and translate'
    )

    const planec = { a: 0, b: 2, x: 1, y: 1, z: 1 }
    t.deepEqual(
      point3.transitFrom({ x: 1, y: 1, z: 1 }, planec),
      { x: -1, y: 3, z: 3 },
      'scale, rotate, and translate'
    )

    t.end()
  })
}
