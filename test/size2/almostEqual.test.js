const fine = require('../../index')
const size2 = fine.size2

module.exports = (ts) => {
  ts.test('case: tolerance', (t) => {
    const s = { w: 0, h: 0 }
    const ss = { w: 3, h: 3 }

    t.true(size2.almostEqual(s, s, 0), 'should be strictly equal')
    t.true(size2.almostEqual(ss, ss), 'should be strictly equal within default tolerance')
    t.false(size2.almostEqual(s, ss), 'should be different enough')

    t.false(size2.almostEqual(s, ss, 5), 'should be just different enough')
    t.true(size2.almostEqual(s, ss, 6), 'should be within tolerance')

    t.end()
  })
}
