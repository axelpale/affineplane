const affineplane = require('../../index')
const box2 = affineplane.box2

module.exports = (ts) => {
  ts.test('case: basic box fromPoints', (t) => {
    const p = [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 0, y: 1 },
      { x: 1, y: 1 }
    ]
    t.deepEqual(
      box2.fromPoints(p),
      { a: 1, b: 0, x: 0, y: 0, w: 1, h: 1 },
      'trivial'
    )

    const pp = [
      { x: 3, y: 4 },
      { x: -1, y: -2 },
      { x: 1, y: 0 },
      { x: 0, y: 1 },
      { x: 2, y: 2 }
    ]
    t.deepEqual(
      box2.fromPoints(pp),
      { a: 1, b: 0, x: -1, y: -2, w: 4, h: 6 },
      'should handle negative and extra points'
    )

    t.end()
  })

  ts.test('case: invalid arguments', (t) => {
    t.throws(() => {
      box2.fromPoints([])
    }, 'should detect empty array of points')

    t.end()
  })
}
