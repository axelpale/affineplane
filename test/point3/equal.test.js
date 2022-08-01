const point3 = require('../../lib/point3')

module.exports = (ts) => {
  ts.test('case: basic equality', (t) => {
    t.ok(point3.equal(
      { x: 0, y: 1, z: 0 },
      { x: 0, y: 1, z: 0 }
    ))
    t.notOk(point3.equal(
      { x: 0, y: 1, z: 0 },
      { x: 0, y: 0, z: 0 }
    ))
    t.notOk(point3.equal(
      { x: 0, y: 0, z: 0 },
      { x: 0, y: 0, z: 1 }
    ))

    t.end()
  })
}
