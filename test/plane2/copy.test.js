const plane2 = require('../../lib/plane2')

module.exports = (ts) => {
  ts.test('case: basic copy', (t) => {
    t.deepEqual(
      plane2.copy({ a: 1, b: 2, x: 3, y: 4 }),
      { a: 1, b: 2, x: 3, y: 4 },
      'should have same content'
    )

    const p = { a: 1, b: 2, x: 3, y: 4 }
    t.notEqual(
      plane2.clone(p),
      p,
      'should not be the same object'
    )

    t.end()
  })
}
