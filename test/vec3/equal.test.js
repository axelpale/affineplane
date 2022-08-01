const vec3 = require('../../lib/vec3')

module.exports = (ts) => {
  ts.test('case: basic equality', (t) => {
    t.ok(vec3.equal(
      { x: 0, y: 1, z: 0 },
      { x: 0, y: 1, z: 0 }
    ))
    t.notOk(vec3.equal(
      { x: 0, y: 1, z: 0 },
      { x: 0, y: 0, z: 0 }
    ))
    t.notOk(vec3.equal(
      { x: 0, y: 0, z: 0 },
      { x: 0, y: 0, z: 1 }
    ))

    t.end()
  })
}
