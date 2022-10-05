const helm3 = require('../../lib/helm3')
const inverse = helm3.inverse

module.exports = (ts) => {
  ts.test('case: various inversions', (t) => {
    const inv180 = inverse(helm3.ROT180)
    t.almostEqual(inv180, helm3.ROT180)

    const x2 = inverse(helm3.HALF)
    t.almostEqual(x2, helm3.X2)

    const tr = { a: 2, b: 0, x: 1, y: 2, z: 3 }
    const itr = { a: 0.5, b: 0, x: -0.5, y: -1, z: -1.5 }
    t.almostEqual(inverse(tr), itr, 'should invert translation')

    t.end()
  })

  ts.test('case: double inversions', (t) => {
    const inv45 = inverse(helm3.ROT45)
    t.almostEqual(inverse(inv45), helm3.ROT45)

    const inv90 = inverse(helm3.ROT90)
    t.almostEqual(inverse(inv90), helm3.ROT90)

    const tr = { a: 1, b: 2, x: 3, y: 4, z: 5 }
    const itr = inverse(tr)
    t.almostEqual(inverse(itr), tr)

    t.end()
  })

  ts.test('case: detect singular matrix', (t) => {
    t.throws(() => {
      inverse(helm3.SINGULAR)
    }, Error)

    t.end()
  })
}
