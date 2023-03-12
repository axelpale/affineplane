const sphere2 = require('../../index').sphere2

module.exports = (ts) => {
  ts.test('case: basic sphere center', (t) => {
    t.deepEqual(
      sphere2.atCenter({ x: 0, y: 0, r: 0 }),
      { x: 0, y: 0 },
      'trivial zero'
    )

    t.deepEqual(
      sphere2.atCenter({ x: 2, y: 2, r: 2 }),
      { x: 2, y: 2 },
      'should have correct props'
    )

    t.end()
  })
}
