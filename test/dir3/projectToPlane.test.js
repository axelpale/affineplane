const dir3 = require('../../lib/dir3')

module.exports = (ts) => {
  ts.test('case: basic orthogonal projection to plane', (t) => {
    const plane = { a: 1, b: 0, x: 0, y: 0, z: 0 }
    t.deepEqual(
      dir3.projectTo({ x: 1, y: 0, z: 0 }, plane),
      { x: 1, y: 0 },
      'identity plane; should lose z'
    )

    const planeb = { a: 2, b: 0, x: 1, y: 2, z: 3 }
    const dirb = dir3.fromSpherical(0, Math.PI / 4)
    t.deepEqual(
      dir3.projectTo(dirb, planeb),
      { x: 1, y: 0 },
      'plane translation should not affect'
    )

    const planec = { a: 1, b: 0, x: 0, y: 0, z: 0 }
    const dirc = dir3.fromSpherical(0, 0)
    t.deepEqual(
      dir3.projectTo(dirc, planec),
      { x: 1, y: 0 },
      'default arbitrary direction'
    )

    t.end()
  })
}
