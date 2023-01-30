const PI = Math.PI
const PI2 = 2 * PI

module.exports = (r) => {
  // @affineplane.angle.modulo(r)
  //
  // Limit an angle between ]-PI, +PI] but preserve the direction.
  // This can be used to preprocess user input, for example to normalize
  // 4*PI as 0.
  //
  // Parameters:
  //   r
  //     angle in radians, allowed to be outside ]-PI, +PI].
  //
  // Return
  //   a number, the angle in radians and between ]-PI, +PI]
  //

  // JS modulo sign equals the sign of the dividend.
  // Therefore a special treatment is in order to ensure
  // positive values.
  let alpha, beta
  if (r < 0) {
    alpha = -(-r % PI2) // ]-2π,0[
    beta = PI2 - alpha // ]0,2π[
  } else if (r === 0) {
    beta = 0 // [0,0]
  } else if (r > 0) {
    beta = r % PI2 // ]0,2π[
  }
  // beta [0,2π[

  if (beta > PI) {
    return beta - PI2 // ]-π,0[
  }
  return beta // [0,π]
}
