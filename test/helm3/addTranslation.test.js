const helm3 = require('../../lib/helm3')

module.exports = (ts) => {
  ts.test('case: basic translations', (t) => {
    let tr, vec

    tr = helm3.IDENTITY
    vec = { x: 1, y: 2, z: 3 }
    t.almostEqual(
      helm3.addTranslation(tr, vec),
      { a: 1, b: 0, x: 1, y: 2, z: 3 },
      '3d vector'
    )

    tr = { a: 0, b: 1, x: 0, y: 0, z: 2 }
    vec = { x: 1, y: 2 }
    t.almostEqual(
      helm3.addTranslation(tr, vec),
      { a: 0, b: 1, x: 1, y: 2, z: 2 },
      '2d vector'
    )

    t.end()
  })
}
