const affineplane = require('../../index')
const path2 = affineplane.path2

module.exports = (ts) => {
  ts.test('case: basic combine', (t) => {
    const p0 = [{ x: 0, y: 0 }, { x: 1, y: 1 }]
    const p1 = [{ x: 2, y: 2 }]

    t.deepEqual(
      path2.combine(p0, p1),
      p0.concat(p1),
      'should copy arrays together'
    )

    t.end()
  })
}
