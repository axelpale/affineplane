const helm2 = require('../../lib/helm2')

module.exports = (ts) => {
  ts.test('case: basic translations', (t) => {
    let tr, vec

    tr = { a: 1, b: 2, x: 3, y: 4 }
    vec = { x: 0, y: 0 }
    t.almostEqual(
      helm2.setTranslation(tr, vec),
      { a: 1, b: 2, x: 0, y: 0 },
      'zero translation'
    )

    tr = { a: 1, b: 2, x: 3, y: 4 }
    vec = { x: 3, y: 4 }
    t.almostEqual(
      helm2.setTranslation(tr, vec),
      { a: 1, b: 2, x: 3, y: 4 },
      'same translation'
    )

    t.end()
  })
}
