const sphere2 = require('../../lib/sphere2')

module.exports = (ts) => {
  ts.test('case: basic tangent circles', (t) => {
    let cs

    cs = sphere2.tangentCircles(
      { x: 0, y: 0, r: 1 },
      { x: 2, y: 2, r: 1 },
      1
    )
    t.almostEqualSphere(cs[0], { x: 2, y: 0, r: 1 }, 'should find left-hand circle')
    t.almostEqualSphere(cs[1], { x: 0, y: 2, r: 1 }, 'should find right-hand circle')

    cs = sphere2.tangentCircles(
      { x: 2, y: 2, r: 1 },
      { x: 0, y: 0, r: 1 },
      1
    )
    t.almostEqualSphere(cs[0], { x: 0, y: 2, r: 1 }, 'should find left-hand circle')
    t.almostEqualSphere(cs[1], { x: 2, y: 0, r: 1 }, 'should find right-hand circle')

    t.end()
  })

  ts.test('case: nested input circles', (t) => {
    // concentric
    const csa = sphere2.tangentCircles(
      { x: -2, y: -2, r: 2 },
      { x: -2, y: -2, r: 1 },
      1
    )
    t.equals(csa.length, 1, 'should find only one circle')
    t.almostEqualSphere(
      csa[0],
      { x: 1, y: -2, r: 1 },
      'should find tangent to the largest of the concentric, at right'
    )

    const csb = sphere2.tangentCircles(
      { x: -2, y: -2, r: 1 },
      { x: -2, y: -2, r: 2 },
      1
    )
    t.equals(csb.length, 1, 'should find only one circle, regardless of the smallest given first')
    t.almostEqualSphere(csb[0], csa[0], 'should find the same circle')

    // non-concentric
    const csc = sphere2.tangentCircles(
      { x: 0, y: -2, r: 2 },
      { x: 0, y: -1, r: 1 },
      2
    )
    t.equals(csc.length, 1, 'should find only one circle, regardless of the input circles are non-concentric')
    t.almostEqualSphere(
      csc[0],
      { x: 0, y: 2, r: 2 },
      'should find a circle tangent to the first, close to the second'
    )

    t.end()
  })

  ts.test('case: partly overlapping input circles', (t) => {
    const ABOUT05 = 0.527951395671098
    const ABOUT49 = 4.972048604328897

    const csa = sphere2.tangentCircles(
      { x: 0, y: 0, r: 2 },
      { x: 1, y: 1, r: 1 },
      3
    )
    t.almostEqualSphere(csa[0], { x: ABOUT49, y: ABOUT05, r: 3 }, 'should find left-hand tangent')
    t.almostEqualSphere(csa[1], { x: ABOUT05, y: ABOUT49, r: 3 }, 'should find right-hand tangent')

    // opposite order
    const csb = sphere2.tangentCircles(
      { x: 1, y: 1, r: 1 },
      { x: 0, y: 0, r: 2 },
      3
    )
    t.almostEqualSphere(csb[0], { x: ABOUT05, y: ABOUT49, r: 3 }, 'should find left-hand tangent')
    t.almostEqualSphere(csb[1], { x: ABOUT49, y: ABOUT05, r: 3 }, 'should find right-hand tangent')

    t.end()
  })

  ts.test('case: distant input circles', (t) => {
    const csa = sphere2.tangentCircles(
      { x: 0, y: 0, r: 2 },
      { x: 0, y: 10, r: 1 },
      2
    )
    t.almostEqualSphere(csa[0], { x: 0, y: 4, r: 2 }, 'should find tangent to first')
    t.almostEqualSphere(csa[1], { x: 0, y: 7, r: 2 }, 'should find tangent to second')

    const csb = sphere2.tangentCircles(
      { x: 0, y: 10, r: 1 },
      { x: 0, y: 0, r: 2 },
      2
    )
    t.almostEqualSphere(csb[0], { x: 0, y: 7, r: 2 }, 'should find tangent to first')
    t.almostEqualSphere(csb[1], { x: 0, y: 4, r: 2 }, 'should find tangent to second')

    t.end()
  })

  ts.test('case: zero radius circles', (t) => {
    const csa = sphere2.tangentCircles(
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      0
    )
    t.deepEqual(csa, [{ x: 0, y: 0, r: 0 }], 'should find one zero circle')

    const csb = sphere2.tangentCircles(
      { x: 2, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      1
    )
    t.deepEqual(csb, [{ x: 1, y: 0, r: 1 }], 'should find only one unit circle between')

    const csc = sphere2.tangentCircles(
      { x: 2, y: 0, r: 1 },
      { x: 0, y: 0, r: 1 },
      0
    )
    t.deepEqual(csc, [{ x: 1, y: 0, r: 0 }], 'should find only one zero circle between')

    const csd = sphere2.tangentCircles(
      { x: 2, y: 0, r: 0 },
      { x: 0, y: 0, r: 2 },
      0
    )
    t.deepEqual(csd, [{ x: 2, y: 0, r: 0 }], 'should find only one zero circle at the surface')

    t.end()
  })
}
