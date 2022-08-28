const plane3 = require('../../lib/plane3')

module.exports = (ts) => {
  ts.test('case: basic scales', (t) => {
    t.almostEqual(
      plane3.getScale({ a: 1, b: 0, x: 0, y: 0, z: 0 }),
      1,
      'trivial'
    )

    t.almostEqual(
      plane3.getScale({ a: 0, b: -2, x: 4, y: 6, z: 8 }),
      2,
      'should be invariant of rotation and sign'
    )

    t.end()
  })
}
