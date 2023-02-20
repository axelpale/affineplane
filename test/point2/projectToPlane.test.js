const point2 = require('../../lib/point2')

module.exports = (ts) => {
  ts.test('case: basic orthogonal projection to plane', (t) => {
    const plane = { a: 1, b: 0, x: 0, y: 0, z: 0 }
    t.deepEqual(
      point2.projectTo({ x: 3, y: 0 }, plane),
      { x: 3, y: 0 }
    )

    const planeb = { a: 1, b: 0, x: 1, y: 2, z: 3 }
    t.deepEqual(
      point2.projectTo({ x: 3, y: 0 }, planeb),
      { x: 2, y: -2 }
    )

    t.end()
  })

  ts.test('case: basic perspective projection to plane', (t) => {
    const plane = { a: 1, b: 0, x: 0, y: 0, z: 0 }
    const camera = { x: 1, y: 1, z: 0 }
    t.deepEqual(
      point2.projectTo({ x: 3, y: 0 }, plane, camera),
      { x: 1, y: 1 },
      'camera at geometry depth'
    )

    const planeb = { a: 1, b: 0, x: 0, y: 0, z: -2 }
    const camerab = { x: 0, y: 0, z: -4 }
    t.deepEqual(
      point2.projectTo({ x: 2, y: 0 }, planeb, camerab),
      { x: 1, y: 0 },
      'camera away from projection plane'
    )

    const planec = { a: 3, b: 0, x: 0, y: 0, z: -2 }
    const camerac = { x: 0, y: 0, z: -4 }
    t.deepEqual(
      point2.projectTo({ x: 6, y: 0 }, planec, camerac),
      { x: 1, y: 0 },
      'scaled projection plane'
    )

    t.end()
  })
}
