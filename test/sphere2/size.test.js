const sphere2 = require('../../index').sphere2

module.exports = (ts) => {
  ts.test('case: basic sphere size', (t) => {
    t.deepEqual(
      sphere2.size({ x: 0, y: 0, r: 0 }),
      { w: 0, h: 0 },
      'trivial null circle'
    )

    t.deepEqual(
      sphere2.size({ x: 2, y: 2, r: 2 }),
      { w: 4, h: 4 },
      'should have size double the radius'
    )

    t.end()
  })
}
