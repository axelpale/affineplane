const vec3 = require('../../lib/vec3')

module.exports = (ts) => {
  ts.test('case: basic inverse', (t) => {
    t.deepEqual(
      vec3.inverse({ x: 1, y: 2, z: 3 }),
      { x: -1, y: -2, z: -3 }
    )

    t.end()
  })
}
