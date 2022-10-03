const dir3 = require('../../index').dir3

module.exports = (ts) => {
  ts.test('case: strict equivalence', (t) => {
    t.ok(
      dir3.almostEqual({ x: 0, y: 0, z: 0 }, { x: 0, y: 0, z: 0 }),
      'impossible zero directions'
    )
    t.ok(
      dir3.almostEqual({ x: 1, y: 0, z: 0 }, { x: 1, y: 0, z: 0 }),
      'same vector'
    )
    t.notOk(
      dir3.almostEqual({ x: 0, y: 0, z: -1 }, { x: 0, y: 0, z: 1 }),
      'different vector'
    )

    t.end()
  })

  ts.test('case: allow small difference', (t) => {
    const epsilon = 1
    let d0 = { x: 1, y: 0.5, z: -1 }
    let d1 = { x: 1, y: 1, z: -1 }
    t.ok(
      dir3.almostEqual(d0, d1, epsilon),
      'half epsilon difference'
    )

    t.notOk(
      dir3.almostEqual(d0, d1, 0.25),
      'double epsilon difference'
    )

    t.end()
  })
}
