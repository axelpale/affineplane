const sphere2 = require('../../lib/sphere2')

module.exports = (ts) => {
  ts.test('case: basic tangent circle', (t) => {
    t.deepEqual(
      sphere2.tangentCircle(
        { x: 0, y: 0, r: 1 },
        { x: 4, y: 0, r: 1 },
        1
      ),
      { x: 2, y: 0, r: 1 },
      'should find a circle between'
    )

    t.almostEqualSphere(
      sphere2.tangentCircle(
        { x: 0, y: 3, r: 2 },
        { x: 4, y: 0, r: 3 },
        1
      ),
      { x: 0, y: 0, r: 1 },
      'should find at the left-hand side, in spite of smaller first'
    )
    t.almostEqualSphere(
      sphere2.tangentCircle(
        { x: 0, y: 4, r: 3 },
        { x: 3, y: 0, r: 2 },
        1
      ),
      { x: 0, y: 0, r: 1 },
      'should find at the left-hand side'
    )
    t.almostEqualSphere(
      sphere2.tangentCircle(
        { x: 3, y: 0, r: 2 },
        { x: 0, y: 4, r: 3 },
        1,
        true
      ),
      { x: 0, y: 0, r: 1 },
      'should find at the right-hand side, in spite of smaller first'
    )
    t.almostEqualSphere(
      sphere2.tangentCircle(
        { x: 4, y: 0, r: 3 },
        { x: 0, y: 3, r: 2 },
        1,
        true
      ),
      { x: 0, y: 0, r: 1 },
      'should find at the right-hand side'
    )

    t.end()
  })

  ts.test('case: nested input circles', (t) => {
    t.almostEqualSphere(
      sphere2.tangentCircle(
        { x: -2, y: -2, r: 2 },
        { x: -2, y: -2, r: 1 },
        1
      ),
      { x: 1, y: -2, r: 1 },
      'should find tangent to the largest of the concentric, at right'
    )

    t.almostEqualSphere(
      sphere2.tangentCircle(
        { x: -2, y: -2, r: 1 },
        { x: -2, y: -2, r: 2 },
        1
      ),
      { x: 1, y: -2, r: 1 },
      'should find tangent to the largest of the concentric, at right, smallest given first'
    )

    t.almostEqualSphere(
      sphere2.tangentCircle(
        { x: 0, y: -2, r: 2 },
        { x: 0, y: -1, r: 1 },
        2
      ),
      { x: 0, y: 2, r: 2 },
      'should find close to the smaller one, non-concentric'
    )

    t.end()
  })

  ts.test('case: partly overlapping input circles', (t) => {
    const ABOUT05 = 0.527951395671098
    const ABOUT49 = 4.972048604328897
    t.almostEqualSphere(
      sphere2.tangentCircle(
        { x: 0, y: 0, r: 2 },
        { x: 1, y: 1, r: 1 },
        3
      ),
      { x: ABOUT49, y: ABOUT05, r: 3 },
      'should find left-hand tangent to both, wrt largest'
    )
    t.almostEqualSphere(
      sphere2.tangentCircle(
        { x: 1, y: 1, r: 1 },
        { x: 0, y: 0, r: 2 },
        3
      ),
      { x: ABOUT05, y: ABOUT49, r: 3 },
      'should find left-hand tangent to both, wrt smallest'
    )

    t.almostEqualSphere(
      sphere2.tangentCircle(
        { x: 0, y: 0, r: 2 },
        { x: 1, y: 1, r: 1 },
        3,
        true
      ),
      { x: ABOUT05, y: ABOUT49, r: 3 },
      'should find right-hand tangent to both, wrt largest'
    )
    t.almostEqualSphere(
      sphere2.tangentCircle(
        { x: 1, y: 1, r: 1 },
        { x: 0, y: 0, r: 2 },
        3,
        true
      ),
      { x: ABOUT49, y: ABOUT05, r: 3 },
      'should find right-hand tangent to both, wrt smallest'
    )

    t.end()
  })

  ts.test('case: distant input circles', (t) => {
    t.almostEqualSphere(
      sphere2.tangentCircle(
        { x: 0, y: 0, r: 2 },
        { x: 0, y: 10, r: 1 },
        2
      ),
      { x: 0, y: 4, r: 2 },
      'should find tangent to first'
    )
    t.almostEqualSphere(
      sphere2.tangentCircle(
        { x: 0, y: 10, r: 1 },
        { x: 0, y: 0, r: 2 },
        2
      ),
      { x: 0, y: 7, r: 2 },
      'should find tangent to first in spite of being smaller'
    )
    t.almostEqualSphere(
      sphere2.tangentCircle(
        { x: 0, y: 0, r: 2 },
        { x: 0, y: 10, r: 1 },
        2,
        true
      ),
      { x: 0, y: 7, r: 2 },
      'should find tangent to second'
    )
    t.almostEqualSphere(
      sphere2.tangentCircle(
        { x: 0, y: 10, r: 1 },
        { x: 0, y: 0, r: 2 },
        2,
        true
      ),
      { x: 0, y: 4, r: 2 },
      'should find tangent to second in spite of being smaller'
    )

    t.end()
  })

  ts.test('case: zero radius circles', (t) => {
    t.almostEqualSphere(
      sphere2.tangentCircle(
        { x: 0, y: 0, r: 0 },
        { x: 0, y: 0, r: 0 },
        0
      ),
      { x: 0, y: 0, r: 0 },
      'should find trivial zero circle'
    )

    t.almostEqualSphere(
      sphere2.tangentCircle(
        { x: 2, y: 0, r: 0 },
        { x: 0, y: 0, r: 0 },
        1
      ),
      { x: 1, y: 0, r: 1 },
      'should find unit circle between'
    )

    t.almostEqualSphere(
      sphere2.tangentCircle(
        { x: 2, y: 0, r: 1 },
        { x: 0, y: 0, r: 1 },
        0
      ),
      { x: 1, y: 0, r: 0 },
      'should find zero circle between'
    )

    t.almostEqualSphere(
      sphere2.tangentCircle(
        { x: 2, y: 0, r: 0 },
        { x: 0, y: 0, r: 2 },
        0
      ),
      { x: 2, y: 0, r: 0 },
      'should find zero circle at the surface'
    )

    t.end()
  })
}
