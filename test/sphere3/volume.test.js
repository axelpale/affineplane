const sphere3 = require('../../lib/sphere3')

module.exports = (ts) => {
  ts.test('case: sphere volume', (t) => {
    let ball

    ball = { x: 0, y: 1, z: 0, r: 0 }
    t.equal(sphere3.volume(ball), 0, 'empty sphere')

    ball = { x: 0, y: 1, z: 0, r: 1 }
    t.equal(sphere3.volume(ball), 4 * Math.PI / 3, 'unit sphere')

    ball = { x: 0, y: 1, z: 0, r: 2 }
    t.equal(sphere3.volume(ball), 32 * Math.PI / 3, 'two sphere')

    t.end()
  })
}
