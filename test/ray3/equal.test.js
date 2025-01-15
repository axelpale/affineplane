const affineplane = require('../../index')
const ray3 = affineplane.ray3

module.exports = (ts) => {
  ts.test('case: strictly equal ray', (t) => {
    t.ok(
      ray3.equal(
        { x: 0, y: 0, z: 0, dx: 0, dy: 0, dz: 0 },
        { x: 0, y: 0, z: 0, dx: 0, dy: 0, dz: 0 }
      ),
      'zero rays should be equal'
    )
    t.ok(
      ray3.equal(
        { x: 1, y: 2, z: 3, dx: 1, dy: 2, dz: 3 },
        { x: 1, y: 2, z: 3, dx: 1, dy: 2, dz: 3, r: 4 }
      ),
      'allow additional properties'
    )
    t.notOk(
      ray3.equal(
        { x: 0, y: 0, z: 0, dx: 0, dy: 0, dz: 0 },
        { x: 0, y: 0, z: 0, dx: 0, dy: 0, dz: 1 }
      ),
      'should detect different rays'
    )
    t.notOk(
      ray3.equal(
        { x: 0, y: 0, z: 0, dx: 0, dy: 0, dz: 0 },
        { x: 0, y: 0, z: 0, dx: 0, dy: 0, dz: 0.000000001 }
      ),
      'should detect slight difference'
    )

    t.end()
  })
}
