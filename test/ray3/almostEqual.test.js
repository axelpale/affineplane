const affineplane = require('../../index')
const ray3 = affineplane.ray3

module.exports = (ts) => {
  ts.test('case: almost equal ray', (t) => {
    t.ok(
      ray3.almostEqual(
        { x: 0, y: 0, z: 0, dx: 0, dy: 0, dz: 0 },
        { x: 0, y: 0, z: 0, dx: 0, dy: 0, dz: 0 }
      ),
      'zero ray'
    )
    t.ok(
      ray3.almostEqual(
        { x: 1, y: 2, z: 3, dx: 1, dy: 2, dz: 3 },
        { x: 1, y: 2, z: 3, dx: 1, dy: 2, dz: 3, r: 4 }
      ),
      'allow additional properties'
    )
    t.notOk(
      ray3.almostEqual(
        { x: 0, y: 0, z: 0, dx: 0, dy: 0, dz: 0 },
        { x: 0, y: 0, z: 0, dx: 0, dy: 0, dz: 1 }
      ),
      'different rays'
    )
    t.ok(
      ray3.almostEqual(
        { x: 0, y: 0, z: 0, dx: 0, dy: 0, dz: 0 },
        { x: 0, y: 0, z: 0, dx: 0, dy: 0, dz: 1 },
        1
      ),
      'different rays but within tolerance'
    )

    t.end()
  })
}
