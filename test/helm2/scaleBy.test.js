const helm2 = require('../../lib/helm2')

module.exports = (ts) => {
  ts.test('case: basic scalings', (t) => {
    let tr

    tr = { a: 1, b: 0, x: 0, y: 0 }
    t.almostEqual(
      helm2.scaleBy(tr, 2),
      { a: 2, b: 0, x: 0, y: 0 },
      'double'
    )

    tr = { a: 0, b: 2, x: 2, y: 3 }
    t.almostEqual(
      helm2.scaleBy(tr, 2),
      { a: 0, b: 4, x: 4, y: 6 },
      'preserve rotation'
    )

    t.end()
  })

  ts.test('case: prevent negative scale', (t) => {
    const tr = { a: 1, b: 0, x: 0, y: 0 }

    t.throws(() => {
      helm2.scaleBy(tr, 0)
    }, Error, 'detect zero')

    t.throws(() => {
      helm2.scaleBy(tr, -1)
    }, Error, 'detect negative')

    t.end()
  })
}
