const plane2 = require('../../lib/plane2')

module.exports = (ts) => {
  ts.test('case: basic scales', (t) => {
    t.almostEqual(
      plane2.getScale({ a: 1, b: 0, x: 0, y: 0 }),
      1,
      'trivial'
    )

    t.almostEqual(
      plane2.getScale({ a: 0, b: -2, x: 4, y: 6 }),
      2,
      'should be invariant of rotation and sign'
    )

    t.end()
  })
}
