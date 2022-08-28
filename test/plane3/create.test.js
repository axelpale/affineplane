const plane3 = require('../../lib/plane3')

module.exports = (ts) => {
  ts.test('case: basic create', (t) => {
    const origin = { x: 1, y: 2, z: 3 }
    const span = { x: 4, y: 5 }
    t.deepEqual(
      plane3.create(origin, span),
      { a: 4, b: 5, x: 1, y: 2, z: 3 }
    )

    t.end()
  })
}
