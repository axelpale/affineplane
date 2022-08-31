const line2 = require('../../lib/line2')

module.exports = (ts) => {
  ts.test('case: create valid line2', (t) => {
    const origin = { x: 2, y: 1 }
    const span = { x: 3, y: 3 }
    t.deepEqual(
      line2.create(origin, span),
      { origin, span },
      'correct format'
    )

    t.ok(
      line2.validate(line2.create(origin, span)),
      'ensure valid'
    )

    t.end()
  })
}
