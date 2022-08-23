const plane3 = require('../../lib/plane3')

module.exports = (ts) => {
  ts.test('case: basic orthogonal projection to plane', (t) => {
    const target = { a: 1, b: 0, x: 0, y: 0, z: 0 }
    t.deepEqual(
      plane3.projectToPlane({ a: 2, b: 0, x: 3, y: 0, z: 2 }, target),
      { a: 2, b: 0, x: 3, y: 0 },
      'trivial, identity target'
    )

    const targetb = { a: 2, b: 0, x: 1, y: 2, z: 0 }
    t.deepEqual(
      plane3.projectToPlane({ a: 2, b: 0, x: 3, y: 0, z: 2 }, targetb),
      { a: 1, b: 0, x: 1, y: -1 },
      'project plane orthogonally'
    )

    t.end()
  })

  ts.test('case: basic perspective projection to plane', (t) => {
    const target = { a: 1, b: 0, x: 0, y: 0, z: 0 }
    const camera = { x: 1, y: 1, z: 0 }
    t.deepEqual(
      plane3.projectToPlane({ a: 2, b: 0, x: 3, y: 0, z: 0 }, target, camera),
      { a: 0, b: 0, x: 1, y: 1 },
      'singular cuz camera on geometry'
    )

    const targetb = { a: 1, b: 0, x: 0, y: 0, z: -2 }
    const camerab = { x: 0, y: 0, z: -4 }
    t.deepEqual(
      plane3.projectToPlane({ a: 2, b: 0, x: 2, y: 0, z: 0 }, targetb, camerab),
      { a: 1, b: 0, x: 1, y: 0 },
      'effect to half due to perspect'
    )

    const targetc = { a: 1, b: 0, x: 0, y: 0, z: -4 }
    const camerac = { x: 0, y: 0, z: -6 }
    t.deepEqual(
      plane3.projectToPlane({ a: 2, b: 0, x: 2, y: 0, z: -2 }, targetc, camerac),
      { a: 1, b: 0, x: 1, y: 0 },
      'changing reference plane depth should not affect'
    )

    t.end()
  })
}
