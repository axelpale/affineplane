const line2 = require('../../lib/line2')

module.exports = (ts) => {
  ts.test('case: basic at', (t) => {
    const line = { origin: { x: 1, y: 1 }, span: { x: 1, y: 0 } }
    t.deepEqual(
      line2.at(line, 3),
      { x: 4, y: 1 },
      'three spans away from origin'
    )

    t.end()
  })
}
