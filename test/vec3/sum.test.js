const vec3 = require('../../lib/vec3')

module.exports = (ts) => {
  ts.test('case: basic sum', (t) => {
    t.almostEqual(vec3.sum([
      { x: 1, y: 2, z: 3 },
      { x: 2, y: 3, z: 1 },
      { x: 3, y: 1, z: 2 }
    ]), { x: 6, y: 6, z: 6 })

    t.end()
  })

  ts.test('case: empty array', (t) => {
    t.almostEqual(vec3.sum([]), { x: 0, y: 0, z: 0 })

    t.end()
  })
}
