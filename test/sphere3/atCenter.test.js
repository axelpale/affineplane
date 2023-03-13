const sphere3 = require('../../index').sphere3

module.exports = (ts) => {
  ts.test('case: basic sphere center', (t) => {
    t.deepEqual(
      sphere3.atCenter({ x: 0, y: 0, z: 0, r: 0 }),
      { x: 0, y: 0, z: 0 },
      'trivial zero'
    )

    t.deepEqual(
      sphere3.atCenter({ x: 2, y: 2, z: 2, r: 2 }),
      { x: 2, y: 2, z: 2 },
      'should have correct props'
    )

    t.end()
  })
}
