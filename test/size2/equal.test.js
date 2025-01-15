const fine = require('../../index')
const size2 = fine.size2

module.exports = (ts) => {
  ts.test('case: strict equality', (t) => {
    const s = { w: 0, h: 0 }
    const ss = { w: 3, h: 3 }

    t.true(size2.equal(s, s), 'should be strictly equal')
    t.true(size2.equal(ss, ss), 'should be strictly equal')
    t.true(size2.equal(s, { w: 0, h: 0 }), 'should allow equality only in value')

    t.false(size2.equal(s, ss), 'should be different enough')

    t.false(
      size2.equal(
        { w: 0, h: 0 },
        { w: 0, h: 0.000000001 }
      ),
      'should detect small difference'
    )

    t.end()
  })
}
