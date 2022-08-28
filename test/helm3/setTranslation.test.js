const helm3 = require('../../lib/helm3')

module.exports = (ts) => {
  ts.test('case: basic translations', (t) => {
    let tr, vec

    tr = { a: 1, b: 2, x: 3, y: 4, z: 5 }
    vec = { x: 0, y: 0, z: 0 }
    t.almostEqual(
      helm3.setTranslation(tr, vec),
      { a: 1, b: 2, x: 0, y: 0, z: 0 },
      'zero translation'
    )

    tr = { a: 1, b: 2, x: 3, y: 4, z: 5 }
    vec = { x: 3, y: 4, z: 5 }
    t.almostEqual(
      helm3.setTranslation(tr, vec),
      { a: 1, b: 2, x: 3, y: 4, z: 5 },
      'same translation'
    )

    t.end()
  })
}
