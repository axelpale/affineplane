const dir3 = require('../../lib/dir3')

module.exports = (ts) => {
  ts.test('case: basic dir from vector', (t) => {
    t.almostEqual(
      dir3.fromVector({ x: 2, y: 0, z: 0 }),
      { x: 1, y: 0, z: 0 },
      'along x'
    )

    const h2 = Math.sqrt(2) / 2
    t.almostEqual(
      dir3.fromVector({ x: 2, y: 0, z: 2 }),
      { x: h2, y: 0, z: h2 },
      'should become unit'
    )

    t.end()
  })
}
