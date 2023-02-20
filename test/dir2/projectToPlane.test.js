const dir2 = require('../../lib/dir2')

module.exports = (ts) => {
  ts.test('case: smoke', (t) => {
    const plane = { a: 0, b: 1, x: 0, y: 0, z: 0 }
    t.deepEqual(
      dir2.projectTo({ x: 1, y: 0 }, plane),
      { x: 0, y: -1 },
      'identity plane; should lose z'
    )

    t.end()
  })
}
