const dir3 = require('../../index').dir3

module.exports = (ts) => {
  ts.test('case: strict equivalence', (t) => {
    t.ok(
      dir3.equal({ x: 0, y: 0, z: 0 }, { x: 0, y: 0, z: 0 }),
      'impossible zero directions'
    )
    t.ok(
      dir3.equal({ x: 1, y: 0, z: 0 }, { x: 1, y: 0, z: 0 }),
      'same vector'
    )
    t.notOk(
      dir3.equal({ x: 0, y: 0, z: -1 }, { x: 0, y: 0, z: 1 }),
      'different vector'
    )
    t.notOk(
      dir3.equal({ x: 0, y: 0, z: 0.999999999 }, { x: 0, y: 0, z: 1 }),
      'slightly different vector'
    )

    t.end()
  })
}
