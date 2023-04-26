const plane3 = require('../../lib/plane3')

module.exports = (ts) => {
  ts.test('case: plane orientation', (t) => {
    t.deepEqual(
      plane3.orientation({ a: 1, b: 0, x: 0, y: 0, z: 0 }),
      { a: 1, b: 0 },
      'trivial'
    )

    t.deepEqual(
      plane3.orientation({ a: 0, b: 2, x: 0, y: 0, z: 0 }),
      { a: 0, b: 1 },
      'should make unitary'
    )

    t.end()
  })
}
