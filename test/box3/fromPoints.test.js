const affineplane = require('../../index')
const box3 = affineplane.box3

module.exports = (ts) => {
  ts.test('case: basic box fromPoints', (t) => {
    const p = [
      { x: 0, y: 0, z: 0 },
      { x: 1, y: 0, z: 0 },
      { x: 0, y: 1, z: 1 },
      { x: 1, y: 1, z: 1 }
    ]
    t.deepEqual(
      box3.fromPoints(p),
      { a: 1, b: 0, x: 0, y: 0, z: 0, w: 1, h: 1, d: 1 },
      'trivial'
    )

    const pp = [
      { x: 3, y: 4, z: 5 },
      { x: -1, y: -2, z: -3 },
      { x: 1, y: 0, z: 0 },
      { x: 0, y: 1, z: 0 },
      { x: 2, y: 2, z: 2 }
    ]
    t.deepEqual(
      box3.fromPoints(pp),
      { a: 1, b: 0, x: -1, y: -2, z: -3, w: 4, h: 6, d: 8 },
      'should handle negative and extra points'
    )

    t.end()
  })

  ts.test('case: invalid arguments', (t) => {
    t.throws(() => {
      box3.fromPoints([])
    }, 'should detect empty array of points')

    t.end()
  })
}
