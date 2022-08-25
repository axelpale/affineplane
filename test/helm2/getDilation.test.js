const helm2 = require('../../index').helm2
const getScale = helm2.getScale

module.exports = (ts) => {
  ts.test('case: basic scalings', (t) => {
    t.equal(getScale(helm2.IDENTITY), 1)
    t.equal(getScale(helm2.HALF), 0.5)
    t.equal(getScale(helm2.X2), 2)

    t.end()
  })

  ts.test('case: scaled', (t) => {
    const x5 = helm2.scaleBy(helm2.ROT90, { x: 0, y: 0 }, 5)
    t.equal(getScale(x5), 5, 'from origin')

    const xx5 = helm2.scaleBy(helm2.ROT45, { x: 100, y: -100 }, 5)
    t.equal(getScale(xx5), 5, 'far from origin')

    t.end()
  })
}
