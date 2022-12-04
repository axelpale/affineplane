const helm2 = require('../../index').helm2
const getDilation = helm2.getDilation
const limitDilation = helm2.limitDilation

module.exports = (ts) => {
  ts.test('case: happy limitDilation', (t) => {
    t.equal(
      getDilation(limitDilation(helm2.HALF, 0.25, 0.75)),
      0.5,
      'within limits, stay same'
    )

    t.equal(
      getDilation(limitDilation(helm2.HALF, 0.64, 0.75)),
      0.64,
      'below limit, scale to minimum'
    )

    t.equal(
      getDilation(limitDilation(helm2.HALF, 0.16, 0.32)),
      0.32,
      'above limit, scale to maximum'
    )

    t.end()
  })

  ts.test('case: bad limitDilation', (t) => {
    t.equal(
      getDilation(limitDilation(helm2.HALF, 0.75, 0.25)),
      0.5,
      'swapped limits'
    )

    t.throws(
      () => {
        limitDilation(helm2.HALF, -2, 2)
      },
      /invalid/i, 'should not allow negative limit'
    )

    t.end()
  })
}
