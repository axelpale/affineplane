const vec3 = require('../../lib/vec3')

module.exports = (ts) => {
  ts.test('case: basic magnitude', (t) => {
    t.equal(vec3.magnitude({ x: 3, y: 4, z: 12 }), 13)
    t.equal(vec3.norm({ x: 3, y: 4, z: 0 }), 5)
    t.end()
  })
}
