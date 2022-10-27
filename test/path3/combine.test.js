const affineplane = require('../../index')
const path3 = affineplane.path3

module.exports = (ts) => {
  ts.test('case: basic combine', (t) => {
    const p0 = [{ x: 0, y: 0, z: 0 }, { x: 1, y: 1, z: 1 }]
    const p1 = [{ x: 2, y: 2, z: 2 }]

    t.deepEqual(
      path3.combine(p0, p1),
      p0.concat(p1),
      'should copy arrays together'
    )

    t.end()
  })
}
