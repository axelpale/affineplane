const sphere3 = require('../../index').sphere3

module.exports = (ts) => {
  ts.test('case: basic sphere size', (t) => {
    t.deepEqual(
      sphere3.size({ x: 0, y: 0, z: 0, r: 0 }),
      { w: 0, h: 0, d: 0 },
      'trivial null sphere'
    )

    t.deepEqual(
      sphere3.size({ x: 2, y: 2, z: 2, r: 2 }),
      { w: 4, h: 4, d: 4 },
      'should have size double the radius'
    )

    t.end()
  })
}
