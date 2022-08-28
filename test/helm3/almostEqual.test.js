const helm3 = require('../../lib/helm3')

module.exports = (ts) => {
  ts.test('case: basic equal', (t) => {
    t.true(helm3.almostEqual(
      { a: 0, b: 0, x: 0, y: 0, z: 0 },
      { a: 0, b: 0, x: 0, y: 0, z: 0 },
      0
    ), 'zero tolerance')

    t.false(helm3.almostEqual(
      { a: 0, b: 0, x: 0, y: 0, z: 0 },
      { a: 0, b: 0, x: 0, y: 0, z: 0 },
      -1
    ), 'negative tolerance')

    t.true(helm3.almostEqual(
      { a: 1, b: 0, x: 0, y: 0, z: 0 },
      { a: 0, b: 0, x: 0, y: 0, z: 0 },
      1
    ), 'inclusive tolerance')

    t.false(helm3.almostEqual(
      { a: 1, b: 0, x: 0, y: 0, z: 0 },
      { a: 0, b: 0, x: 0, y: 0, z: 0 },
      0.5
    ), 'out of tolerance')

    t.end()
  })
}
