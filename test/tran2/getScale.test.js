const tran2 = require('../../index').tran2
const getScale = tran2.getScale

module.exports = (ts) => {
  ts.test('case: basic scalings', (t) => {
    t.equal(getScale(tran2.IDENTITY), 1)
    t.equal(getScale(tran2.HALF), 0.5)
    t.equal(getScale(tran2.X2), 2)

    t.end()
  })

  ts.test('case: scaled', (t) => {
    const x5 = tran2.scaleBy(tran2.ROT90, { x: 0, y: 0 }, 5)
    t.equal(getScale(x5), 5, 'from origin')

    const xx5 = tran2.scaleBy(tran2.ROT45, { x: 100, y: -100 }, 5)
    t.equal(getScale(xx5), 5, 'far from origin')

    t.end()
  })
}
