const affineplane = require('../../index')
const segment3 = affineplane.segment3

module.exports = (ts) => {
  ts.test('case: basic transitFrom', (t) => {
    // let seg, plane

    const seg = [{ x: 0, y: 0, z: 0 }, { x: 1, y: 1, z: 1 }]
    const basis = { a: 2, b: 0, x: 0, y: 2, z: 1 }

    t.deepEqual(
      segment3.transitFrom(seg, basis),
      [{ x: 0, y: 2, z: 1 }, { x: 2, y: 4, z: 3 }],
      'scale and translation should affect'
    )

    t.end()
  })

  ts.test('case: basic transitTo', (t) => {
    // let seg, plane

    const seg = [{ x: 0, y: 2, z: 1 }, { x: 2, y: 4, z: 3 }]
    const plane = { a: 2, b: 0, x: 0, y: 2, z: 1 }

    t.deepEqual(
      segment3.transitTo(seg, plane),
      [{ x: 0, y: 0, z: 0 }, { x: 1, y: 1, z: 1 }],
      'scale and translation should affect'
    )

    t.end()
  })
}
