const vec3 = require('../../lib/vec3')

module.exports = (ts) => {
  ts.test('case: trivial', (t) => {
    const plane = { a: 1, b: 0, x: 0, y: 0, z: 0 }

    t.deepEqual(
      vec3.transitFrom({ x: 0, y: 0, z: 0 }, plane),
      { x: 0, y: 0, z: 0 },
      'zero vector'
    )
    t.deepEqual(
      vec3.transitFrom({ x: 1, y: 1, z: 1 }, plane),
      { x: 1, y: 1, z: 1 },
      'unit vector'
    )

    t.end()
  })

  ts.test('case: basic', (t) => {
    const plane = { a: 1, b: 0, x: 1, y: 1, z: 1 }
    t.deepEqual(
      vec3.transitFrom({ x: 0, y: 0, z: 0 }, plane),
      { x: 0, y: 0, z: 0 },
      'translation does not affect'
    )

    const planeb = { a: 2, b: 0, x: 1, y: 1, z: 1 }
    t.deepEqual(
      vec3.transitFrom({ x: 0, y: 0, z: 0 }, planeb),
      { x: 0, y: 0, z: 0 },
      'scaling does not affect zero vector'
    )
    t.deepEqual(
      vec3.transitFrom({ x: 1, y: 0, z: 1 }, planeb),
      { x: 2, y: 0, z: 2 },
      'scaling affects also z'
    )

    t.end()
  })
}
