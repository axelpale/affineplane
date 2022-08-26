const helm3 = require('../../lib/helm3')

module.exports = (ts) => {
  ts.test('case: basic dilation adding', (t) => {
    t.almostEqual(
      helm3.addDilation({ a: 1, b: 0, x: 0, y: 0, z: 0 }, 2),
      { a: 3, b: 0, x: 0, y: 0, z: 0 },
      'apply to identity'
    )

    t.almostEqual(
      helm3.addDilation({ a: 0, b: -1, x: 2, y: 2, z: 3 }, 2),
      { a: 0, b: -3, x: 2, y: 2, z: 3 },
      'preserve rotation and translation'
    )

    t.almostEqual(
      helm3.addDilation({ a: 1, b: 2, x: 3, y: 4, z: 5 }, 0),
      { a: 1, b: 2, x: 3, y: 4, z: 5 },
      'zero should do nothing'
    )

    t.almostEqual(
      helm3.addDilation({ a: 0, b: 1, x: 0, y: 0, z: 0 }, -1),
      { a: 0, b: 0, x: 0, y: 0, z: 0 },
      'substract to zero'
    )

    t.almostEqual(
      helm3.addDilation({ a: 0, b: 1, x: 0, y: 0, z: 0 }, -2),
      { a: 0, b: -1, x: 0, y: 0, z: 0 },
      'substract to negative'
    )

    t.end()
  })
}
