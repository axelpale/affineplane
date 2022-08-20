const line3 = require('../../lib/line3')

module.exports = (ts) => {
  ts.test('case: basic at', (t) => {
    const line = {
      origin: { x: 1, y: 1, z: 1 },
      span: { x: 1, y: 0, z: 0 }
    }

    t.deepEqual(
      line3.at(line, 3),
      { x: 4, y: 1, z: 1 },
      'three spans away from origin'
    )

    t.end()
  })
}
