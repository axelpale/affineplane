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
    const x5 = { a: 0, b: 5, x: 0, y: 0 }
    t.equal(getScale(x5), 5, 'from origin')

    const xx5 = { a: 3, b: 4, x: 100, y: 100 }
    t.equal(getScale(xx5), 5, 'far from origin')

    t.end()
  })
}
