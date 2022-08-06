const affineplane = require('../../index')
const ortho3 = affineplane.ortho3

module.exports = (ts) => {
  ts.test('case: basic compose', (t) => {
    // Create a projection. The target plane is rotated 90 deg CW
    const pra = ortho3.fromFeats({
      scaling: 1,
      rotation: Math.PI,
      translation: {
        x: 0,
        y: 1,
        z: 1
      }
    })
    const prb = ortho3.fromFeats({
      scaling: 2,
      rotation: Math.PI,
      translation: {
        x: 1,
        y: 2,
        z: -2
      }
    })

    // let v be a vector.
    // prb is applied to v first to get vb.
    // then pra is applied to vb to get vab.
    // The result should be same when prc
    // is applied to v.
    const prc = ortho3.fromFeats({
      scaling: 2,
      rotation: 0,
      translation: {
        x: -1,
        y: -1,
        z: -1
      }
    })

    const prcHat = ortho3.compose(pra, prb)

    t.almostEqual(prcHat, prc, 'ortho3 almost equal')

    t.end()
  })
}
