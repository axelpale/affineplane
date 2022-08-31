const plane3 = require('../../lib/plane3')

module.exports = (ts) => {
  ts.test('case: basic copy', (t) => {
    t.deepEqual(
      plane3.copy({ a: 1, b: 2, x: 3, y: 4, z: 5 }),
      { a: 1, b: 2, x: 3, y: 4, z: 5 },
      'should have same content'
    )

    const p = { a: 1, b: 2, x: 3, y: 4, z: 5 }
    t.notEqual(
      plane3.clone(p),
      p,
      'should not be the same object'
    )

    t.end()
  })
}
