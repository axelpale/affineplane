const helm2 = require('../../index').helm2

module.exports = (ts) => {
  ts.test('case: convert to CSS string', (t) => {
    t.equal(
      helm2.toString({ a: 1, b: 0, x: 0, y: 0 }),
      'matrix(' +
      '1.00000000,0.00000000,' +
      '0.00000000,1.00000000,' +
      '0.00000000,0.00000000)',
      'identity'
    )

    t.equal(
      helm2.toString({ a: 1, b: 0, x: 5, y: -5 }),
      'matrix(' +
      '1.00000000,0.00000000,' +
      '0.00000000,1.00000000,' +
      '5.00000000,-5.00000000)',
      'translation'
    )

    t.equal(
      helm2.toString({ a: 1, b: 0, x: 0, y: 1e-10 }),
      'matrix(' +
      '1.00000000,0.00000000,' +
      '0.00000000,1.00000000,' +
      '0.00000000,0.00000000)',
      'avoid scientific notation'
    )

    t.end()
  })
}
