const dir3 = require('../../lib/dir3')

module.exports = (ts) => {
  ts.test('case: basic dir from vector', (t) => {
    t.almostEqual(
      dir3.toVector({ x: 0, y: 0, z: 1 }),
      { x: 0, y: 0, z: 1 },
      'default magnitude'
    )

    const h2 = Math.sqrt(2) / 2
    t.almostEqual(
      dir3.toVector({ x: h2, y: h2, z: 0 }, 4),
      { x: 4 * h2, y: 4 * h2, z: 0 },
      'with magnitude'
    )

    t.end()
  })
}
