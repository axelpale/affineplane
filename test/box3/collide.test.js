const box3 = require('../../index').box3

module.exports = (ts) => {
  ts.test('case: basic box collision', (t) => {
    let b, bb

    b = { a: 1, b: 0, x: 1, y: 1, z: 1, w: 2, h: 2, d: 2 }
    bb = box3.translate(b, { x: 3, y: 0 })

    t.true(box3.collide(b, b), 'should collide with self')
    t.false(box3.collide(b, bb), 'should not collide translated')

    bb = box3.translate(b, { x: 2, y: 0 })
    t.true(box3.collide(b, bb), 'should collide if touching')

    bb = box3.translate(b, { x: 2, y: 0, z: 3 })
    t.false(box3.collide(b, bb), 'should not collide if z gap')

    b = { a: 1, b: 0, x: 0, y: 0, z: 0, w: 0, h: 0, d: 0 }
    t.true(box3.collide(b, b), 'empty box should collide with self')

    b = { a: 1, b: 0, x: 0, y: 0, z: 0, w: 10, h: 10, d: 10 }
    bb = { a: 1, b: 0, x: 2, y: 2, z: 2, w: 6, h: 6, d: 6 }
    t.true(box3.collide(b, bb), 'nested should collide')

    t.end()
  })
}
