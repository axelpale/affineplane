const vec3 = require('../../lib/vec3')

module.exports = (ts) => {
  ts.test('case: basic orthogonal projection to plane', (t) => {
    const plane = { a: 1, b: 0, x: 0, y: 0, z: 0 }
    t.deepEqual(
      vec3.projectToPlane({ x: 3, y: 0, z: 0 }, plane),
      { x: 3, y: 0 },
      'identity plane; should lose z'
    )

    const planeb = { a: 2, b: 0, x: 1, y: 2, z: 3 }
    t.deepEqual(
      vec3.projectToPlane({ x: 4, y: 0, z: 4 }, planeb),
      { x: 2, y: 0 },
      'plane translation should not affect'
    )

    t.end()
  })
}
