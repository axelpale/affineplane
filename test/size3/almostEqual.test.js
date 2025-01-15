const fine = require('../../index')
const size3 = fine.size3

module.exports = (ts) => {
  ts.test('case: tolerance', (t) => {
    const s = { w: 0, h: 0, d: 0 }
    const ss = { w: 1, h: 2, d: 3 }

    t.true(size3.almostEqual(s, s, 0), 'should be strictly equal')
    t.true(size3.almostEqual(ss, ss), 'should be strictly equal within default tolerance')
    t.false(size3.almostEqual(s, ss), 'should be different enough')

    t.false(size3.almostEqual(s, ss, 5), 'should be just different enough')
    t.true(size3.almostEqual(s, ss, 6), 'should be within tolerance')

    t.end()
  })
}
