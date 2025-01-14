const box2 = require('../../lib/box2')

module.exports = (ts) => {
  ts.test('case: strict equivalence', (t) => {
    const b = { a: 1, b: 0, x: 0, y: 0, w: 1, h: 2 }
    t.true(box2.equal(b, b), 'should allow same object')

    t.true(
      box2.equal(
        { a: 0, b: 1, x: 1, y: 2, w: 3, h: 4 },
        { a: 0, b: 1, x: 1, y: 2, w: 3, h: 4 }
      ),
      'should allow same values'
    )

    t.false(
      box2.equal(
        { a: 0, b: 1, x: 1, y: 2, w: 3, h: 4 },
        { a: 0, b: 1, x: 1, y: -2, w: 3, h: 4 }
      ),
      'should detect different value in y'
    )
    t.false(
      box2.equal(
        { a: 0, b: 1, x: 1, y: 2, w: 3, h: 4 },
        { a: 0, b: 1, x: 1, y: 2, w: 3, h: -4 }
      ),
      'should detect different value in h'
    )

    t.false(
      box2.equal(
        { a: 0, b: 1, x: 1, y: 2, w: 3, h: 4 },
        { a: 0, b: 0.99999999, x: 1, y: 2, w: 3, h: 4 }
      ),
      'should detect slightly different value in b'
    )

    t.end()
  })
}
