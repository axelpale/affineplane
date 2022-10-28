const hamilton = require('./hamilton')
const diff = require('./difference')
const norm = require('./norm')

module.exports = (q, domain, range) => {
  // Mean squared error between the domain and range after the domain
  // is left-multiplied by the quaternion q.
  // Can be used to measure estimation error of quat4.estimate.
  //
  // Mathematically, the result is equal |QD - R|^2 / n, where Q is
  // 4x4 matrix representing the quaternion q, D is
  //
  // Parameters:
  //   q
  //     a quat4
  //   domain
  //     array of quat4
  //   range
  //     array of quat4
  //
  // Return
  //   a number
  //

  const n = Math.min(domain.length, range.length)

  if (n === 0) {
    return 0
  }

  let errsum = 0

  for (let i = 0; i < n; i += 1) {
    const qd = domain[i]
    const qr = range[i]
    const qqd = hamilton(q, qd)
    const qerr = diff(qqd, qr)
    const nerr = norm(qerr)
    // Note unnecessary sqrt within norm. Need to re-square.
    errsum += nerr * nerr
  }

  // Average over
  return errsum / n
}
