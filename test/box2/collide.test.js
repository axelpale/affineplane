const box2 = require('../../lib/box2')

module.exports = (ts) => {
  ts.test('case: basic box collision', (t) => {
    let b, bb

    b = { a: 1, b: 0, x: 1, y: 1, w: 2, h: 2 }
    bb = box2.translate(b, { x: 3, y: 0 })

    t.true(box2.collide(b, b), 'should collide with self')
    t.false(box2.collide(b, bb), 'should not collide translated')

    bb = box2.translate(b, { x: 2, y: 0 })
    t.true(box2.collide(b, bb), 'should collide if touching')

    b = { a: 1, b: 0, x: 0, y: 0, w: 0, h: 0 }
    t.true(box2.collide(b, b), 'empty box should collide with self')

    b = { a: 1, b: 0, x: 0, y: 0, w: 10, h: 2 }
    bb = { a: 0, b: 1, x: 3, y: 2, w: 10, h: 2 }
    t.true(box2.collide(b, bb), 'should collide via segments')

    b = { a: 1, b: 0, x: 0, y: 0, w: 10, h: 10 }
    bb = { a: 0, b: 1, x: -1, y: 0, w: 10, h: 10 }
    t.false(box2.collide(b, bb), 'should not collide within circles')

    b = { a: 1, b: 0, x: 0, y: 0, w: 10, h: 10 }
    bb = { a: 1, b: 0, x: 2, y: 2, w: 6, h: 6 }
    t.true(box2.collide(b, bb), 'nested should collide')

    t.end()
  })
}
