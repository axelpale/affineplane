const affineplane = require('../../index')
const proj2 = affineplane.proj2

module.exports = (ts) => {
  ts.test('case: no change under rotation', (t) => {
    // Create a projection. The target plane is rotated 90 deg CW
    const pr = affineplane.tran2.ROT90
    // The rotation does not affect
    t.deepEqual(proj2.size2(pr, { w: 1, h: 1 }), { w: 1, h: 1 }, 'unit size')
    t.deepEqual(proj2.size2(pr, { w: 0, h: 0 }), { w: 0, h: 0 }, 'zero size')
    t.deepEqual(proj2.size2(pr, { w: 3, h: 2 }), { w: 3, h: 2 }, 'some size')

    t.end()
  })

  ts.test('case: change under scaling', (t) => {
    // Create a projection. The target plane double the scale.
    const pr = affineplane.tran2.X2
    // The rotation does not affect
    t.deepEqual(proj2.size2(pr, { w: 0, h: 0 }), { w: 0, h: 0 }, 'zero size')
    t.deepEqual(proj2.size2(pr, { w: 2, h: 2 }), { w: 1, h: 1 }, 'half size')
    t.deepEqual(proj2.size2(pr, { w: 4, h: 2 }), { w: 2, h: 1 }, 'half size')

    t.end()
  })
}
