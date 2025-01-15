const box3 = require('../../lib/box3')

module.exports = (ts) => {
  ts.test('case: strict equivalence', (t) => {
    const b = { a: 1, b: 0, x: 0, y: 0, z: 0, w: 1, h: 2, d: 3 }
    t.true(box3.equal(b, b), 'should allow same object')

    t.true(
      box3.equal(
        { a: 0, b: 1, x: 1, y: 2, z: 3, w: 3, h: 4, d: 5 },
        { a: 0, b: 1, x: 1, y: 2, z: 3, w: 3, h: 4, d: 5 }
      ),
      'should allow same values'
    )

    t.false(
      box3.equal(
        { a: 0, b: 1, x: 1, y: 2, z: 3, w: 3, h: 4, d: 5 },
        { a: 0, b: 1, x: 1, y: 2, z: -3, w: 3, h: 4, d: 5 }
      ),
      'should detect different value in z'
    )
    t.false(
      box3.equal(
        { a: 0, b: 1, x: 1, y: 2, z: 3, w: 3, h: 4, d: 5 },
        { a: 0, b: 1, x: 1, y: 2, z: 3, w: 3, h: 4, d: -5 }
      ),
      'should detect different value in d'
    )

    t.false(
      box3.equal(
        { a: 0, b: 1, x: 1, y: 2, z: 3, w: 3, h: 4, d: 5 },
        { a: 0, b: 0.99999999, x: 1, y: 2, z: 3, w: 3, h: 4, d: 5 }
      ),
      'should detect slightly different value in b'
    )

    t.false(
      box3.equal(
        { a: 0, b: 1, x: 1, y: 2, z: 3, w: 3, h: 4, d: 5 },
        { a: 0, b: 1, x: 1, y: 2, w: 3, h: 4, d: 5 }
      ),
      'should detect missing z'
    )

    t.end()
  })
}
