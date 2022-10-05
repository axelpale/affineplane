const vec3 = require('../../lib/vec3')

module.exports = (ts) => {
  ts.test('case: trivial', (t) => {
    const plane = { a: 1, b: 0, x: 0, y: 0, z: 0 }

    t.deepEqual(
      vec3.transitTo({ x: 0, y: 0, z: 0 }, plane),
      { x: 0, y: 0, z: 0 },
      'zero vector'
    )
    t.deepEqual(
      vec3.transitTo({ x: 1, y: 1, z: 1 }, plane),
      { x: 1, y: 1, z: 1 },
      'unit vector'
    )

    t.end()
  })

  ts.test('case: basic', (t) => {
    const plane = { a: 1, b: 0, x: 1, y: 1, z: 1 }
    t.deepEqual(
      vec3.transitTo({ x: 2, y: 2, z: 2 }, plane),
      { x: 2, y: 2, z: 2 },
      'translation does not affect'
    )

    const planeb = { a: 2, b: 0, x: 1, y: 1, z: 1 }
    t.deepEqual(
      vec3.transitTo({ x: 2, y: 2, z: 2 }, planeb),
      { x: 1, y: 1, z: 1 },
      'scaling preserves vector direction'
    )

    t.end()
  })
}
