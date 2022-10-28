const affineplane = require('../../index')
const quat4 = affineplane.quat4

module.exports = (ts) => {
  ts.test('case: basic fromAxisAngle', (t) => {
    const q = quat4.fromAxisAngle({ x: 3, y: 4, z: 12 }, Math.PI / 2)
    const p = { a: 0, b: 3 / 13, c: 4 / 13, d: 12 / 13 }
    t.almostEqual(q.a, p.a, 'scalar should be zero')
    t.almostEqual(q.b, p.b, 'correct q.b')
    t.almostEqual(q.c, p.c, 'correct q.c')
    t.almostEqual(q.d, p.d, 'correct q.d')

    t.end()
  })
}
