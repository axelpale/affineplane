const plane2 = require('../../lib/plane2')

module.exports = (ts) => {
  ts.test('case: plane orientation', (t) => {
    t.deepEqual(
      plane2.orientation({ a: 1, b: 0, x: 0, y: 0 }),
      { a: 1, b: 0 },
      'trivial'
    )

    t.deepEqual(
      plane2.orientation({ a: 0, b: 2, x: 0, y: 0 }),
      { a: 0, b: 1 },
      'should make unitary'
    )

    t.deepEqual(
      plane2.orientation({ a: 0, b: 0, x: 0, y: 0 }),
      { a: 1, b: 0 },
      'should fall back to default'
    )

    t.end()
  })
}
