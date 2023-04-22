const sphere3 = require('../../index').sphere3

module.exports = (ts) => {
  ts.test('case: bounding sphere of spheres', (t) => {
    t.deepEqual(
      sphere3.boundingSphere([
        { x: 0, y: 0, z: 0, r: 1 }
      ]),
      { x: 0, y: 0, z: 0, r: 1 },
      'trivial single'
    )

    t.deepEqual(
      sphere3.boundingSphere([
        { x: 0, y: 0, z: 0, r: 1 },
        { x: 0, y: 2, z: 0, r: 1 }
      ]),
      { x: 0, y: 1, z: 0, r: 2 },
      'should fit exactly along y'
    )

    t.deepEqual(
      sphere3.boundingSphere([
        { x: 0, y: 0, z: 0, r: 1 },
        { x: 0, y: 0, z: 2, r: 1 }
      ]),
      { x: 0, y: 0, z: 1, r: 2 },
      'should fit exactly along z'
    )

    t.end()
  })
}
