const circle3 = require('../../lib/circle3')

module.exports = (ts) => {
  ts.test('case: basic area', (t) => {
    t.equal(
      circle3.area({ x: 0, y: 0, z: 0, r: 0 }),
      0,
      'should be zero area'
    )

    t.equal(
      circle3.area({ x: 1, y: 1, z: 1, r: 1 }),
      Math.PI,
      'should not be affected by translation'
    )

    t.end()
  })

  ts.test('case: basic circle size', (t) => {
    t.deepEqual(
      circle3.size({ x: 0, y: 0, z: 0, r: 1 }),
      { w: 2, h: 2, d: 0 },
      'should have zero depth'
    )

    t.end()
  })
}
