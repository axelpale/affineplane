const plane2 = require('../../lib/plane2')

module.exports = (ts) => {
  ts.test('case: basic orthogonal projection to plane', (t) => {
    const target = { a: 1, b: 0, x: 0, y: 0, z: 0 }
    t.deepEqual(
      plane2.projectTo({ a: 2, b: 0, x: 3, y: 0 }, target),
      { a: 2, b: 0, x: 3, y: 0 },
      'trivial, identity target'
    )

    const targetb = { a: 2, b: 0, x: 1, y: 2, z: 3 }
    t.deepEqual(
      plane2.projectTo({ a: 2, b: 0, x: 3, y: 0 }, targetb),
      { a: 1, b: 0, x: 1, y: -1 },
      'project plane orthogonally'
    )

    t.end()
  })

  ts.test('case: basic perspective projection to plane', (t) => {
    let plane, target, camera

    plane = { a: 2, b: 0, x: 3, y: 0 }
    target = { a: 1, b: 0, x: 0, y: 0, z: 0 }
    camera = { x: 1, y: 1, z: 0 }
    t.deepEqual(
      plane2.projectTo(plane, target, camera),
      { a: 0, b: 0, x: 1, y: 1 },
      'singular cuz camera on geometry'
    )

    plane = { a: 2, b: 0, x: 2, y: 0 }
    target = { a: 1, b: 0, x: 0, y: 0, z: -2 }
    camera = { x: 0, y: 0, z: -4 }
    t.deepEqual(
      plane2.projectTo(plane, target, camera),
      { a: 1, b: 0, x: 1, y: 0 },
      'effect to half due to perspect'
    )

    plane = { a: 3, b: 0, x: 3, y: 0 }
    target = { a: 1, b: 0, x: 0, y: 0, z: -4 }
    camera = { x: 0, y: 0, z: -6 }
    t.deepEqual(
      plane2.projectTo(plane, target, camera),
      { a: 1, b: 0, x: 1, y: 0 },
      'change of reference plane depth should affect'
    )

    t.end()
  })
}
