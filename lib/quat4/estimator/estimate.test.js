const quat4 = require('../../lib/quat4')
const estimate = require('../../lib/quat4/estimate')
const getmse = require('../../lib/quat4/mse')

const domain = [
  { a: 0, b: 1, c: 0, d: 0 },
  { a: 0, b: 0, c: 1, d: 0 },
  { a: 0, b: 0, c: 0, d: 1 }
]

const range = [
  { a: 0, b: -0.138, c: -0.161, d: 0.977 },
  { a: 0, b: -0.977, c: -0.138, d: -0.161 },
  { a: 0, b: 0.161, c: -0.977, d: -0.138 }
]

const est = estimate(domain, range)
const len = Math.sqrt(est.a ** 2 + est.b ** 2 + est.c ** 2 + est.d ** 2)
const angle = Math.acos(est.a / len) * 180 / Math.PI
const mse = getmse(est, domain, range)

console.log('estimate:', est)
console.log('length:', len)
console.log('angle deg:', angle)
console.log('mse:', mse)

console.log('mapped:', domain.map(q => quat4.hamilton(est, q)))
