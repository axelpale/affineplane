const dir2 = require('../../index').dir2

module.exports = (ts) => {
  ts.test('case: strict equivalence', (t) => {
    t.ok(
      dir2.equal({ x: 0, y: 0 }, { x: 0, y: 0 }),
      'impossible zero directions'
    )
    t.ok(
      dir2.equal({ x: 1, y: 0 }, { x: 1, y: 0 }),
      'same vector'
    )
    t.notOk(
      dir2.equal({ x: 0, y: -1 }, { x: 0, y: 1 }),
      'different vector'
    )
    t.notOk(
      dir2.equal({ x: 0, y: 0.999999999 }, { x: 0, y: 1 }),
      'slightly different vector'
    )

    t.end()
  })
}
