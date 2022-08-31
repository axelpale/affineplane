const line3 = require('../../lib/line3')

module.exports = (ts) => {
  ts.test('case: create valid line3', (t) => {
    const origin = { x: 2, y: 1, z: 1 }
    const span = { x: 3, y: 3, z: 0 }

    t.deepEqual(
      line3.create(origin, span),
      { origin, span },
      'correct format'
    )

    t.ok(
      line3.validate(line3.create(origin, span)),
      'ensure valid'
    )

    t.end()
  })
}
