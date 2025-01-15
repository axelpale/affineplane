const fine = require('../../index')
const size3 = fine.size3

module.exports = (ts) => {
  ts.test('case: strict equality', (t) => {
    const s = { w: 0, h: 0, d: 0 }
    const ss = { w: 1, h: 2, d: 3 }

    t.true(size3.equal(s, s), 'should be strictly equal')
    t.true(size3.equal(ss, ss), 'should be strictly equal')
    t.true(size3.equal(ss, { w: 1, h: 2, d: 3 }), 'should allow equality only in value')

    t.false(size3.equal(s, ss), 'should be different enough')

    t.false(
      size3.equal(
        { w: 0, h: 0, d: 0 },
        { w: 0, h: 0, d: 0.000000001 }
      ),
      'should detect small difference'
    )

    t.end()
  })
}
