const plane2 = require('../../lib/plane2')

module.exports = (ts) => {
  ts.test('case: basic create', (t) => {
    const span = { x: 1, y: 2 }
    const origin = { x: 3, y: 4 }
    t.deepEqual(
      plane2.create(origin, span),
      { a: 1, b: 2, x: 3, y: 4 }
    )

    t.end()
  })
}
