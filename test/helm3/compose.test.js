const helm3 = require('../../lib/helm3')

module.exports = (ts) => {
  ts.test('case: basic compose', (t) => {
    const hi = { a: 1, b: 0, x: 0, y: 0, z: 0 }
    t.deepEqual(helm3.compose(hi, hi), hi, 'identity')

    const tl = { a: 1, b: 0, x: 1, y: 2, z: 3 }
    const tlr = { a: 1, b: 0, x: 2, y: 4, z: 6 }
    t.deepEqual(helm3.compose(tl, tl), tlr, 'translation')

    const tr = { a: 1, b: 0, x: 1, y: 2, z: 3 }
    const scaling = { a: 2, b: 0, x: 0, y: 0, z: 0 }
    const trr = { a: 2, b: 0, x: 2, y: 4, z: 3 }
    t.deepEqual(helm3.compose(scaling, tr), trr, 'scaling')

    t.end()
  })
}
