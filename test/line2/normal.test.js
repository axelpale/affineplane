const line2 = require('../../lib/line2')

module.exports = (ts) => {
  ts.test('case: basic normal', (t) => {
    const line = { origin: { x: 1, y: 1 }, span: { x: 1, y: 1 } }
    t.deepEqual(
      line2.normal(line),
      { x: -1, y: 1 },
      'should give right normal'
    )

    t.end()
  })
}
