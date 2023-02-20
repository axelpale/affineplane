const helm2 = require('../../lib/helm2')

module.exports = (ts) => {
  ts.test('case: basic orthogonal projection to plane', (t) => {
    let tr, target

    tr = { a: 2, b: 0, x: 3, y: 0 }
    target = { a: 1, b: 0, x: 0, y: 0, z: 0 }
    t.deepEqual(
      helm2.projectTo(tr, target),
      { a: 2, b: 0, x: 3, y: 0 },
      'trivial plane'
    )

    tr = { a: 2, b: 0, x: 3, y: 0 }
    target = { a: 2, b: 0, x: 1, y: 2, z: 0 }
    t.deepEqual(
      helm2.projectTo(tr, target),
      { a: 2, b: 0, x: 1.5, y: 0 },
      'helm does not lose scaling effect but translation changes'
    )

    t.end()
  })

  ts.test('case: basic perspective projection to plane', (t) => {
    const plane = { a: 1, b: 0, x: 0, y: 0, z: 0 }
    const camera = { x: 1, y: 1, z: 0 }
    const htr = { a: 1, b: 0, x: 2, y: 0 }
    t.deepEqual(
      helm2.projectTo(htr, plane, camera),
      { a: 1, b: 0, x: 0, y: 0 },
      'camera at geometry depth thus tr becomes infinite, singular'
    )

    const planeb = { a: 1, b: 0, x: 0, y: 0, z: -2 }
    const camerab = { x: 0, y: 0, z: -4 }
    const htrb = { a: 1, b: 0, x: 2, y: 0 }
    t.deepEqual(
      helm2.projectTo(htrb, planeb, camerab),
      { a: 1, b: 0, x: 1, y: 0 },
      'the image plane is between tr domain and camera'
      // tr shrinks by half
    )

    const planec = { a: 3, b: 0, x: 0, y: 0, z: -2 }
    const camerac = { x: 0, y: 0, z: -4 }
    const htrc = { a: 2, b: 0, x: 6, y: 0 }
    t.deepEqual(
      helm2.projectTo(htrc, planec, camerac),
      { a: 2, b: 0, x: 1, y: 0 },
      'scaled image plane'
    )

    t.end()
  })
}
