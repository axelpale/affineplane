const dir2 = require('../../lib/dir2')

module.exports = (ts) => {
  ts.test('case: basic dir from vector', (t) => {
    t.almostEqual(
      dir2.toVector({ x: 0, y: 1 }, 2),
      { x: 0, y: 2 },
      'with magnitude'
    )

    t.end()
  })
}
