const EPSILON = require('../epsilon')

module.exports = (helm, origin, camera) => {
  // @affineplane.helm2.projectToCameraTransform(helm, origin, camera)
  //
  // Convert the dilation in the transform to a translation of the camera,
  // so that the plane would dilate the same amount due to the perspective.
  // This can be used to convert pinch gestures to forward movement.
  // Also invert rotation and translation for camera movement.
  //
  // Parameters:
  //   helm
  //     a helm2 in the reference basis. Applied at origin.
  //   origin
  //     a point3 in the reference basis. Position of the transform.
  //   camera
  //     a point3, in the reference basis.
  //
  // Return:
  //   a helm3, with scale of 1, in the reference basis.
  //

  // How we could transform the camera so that its movement would
  // cause the plane transform in the same way and amount as the helmert
  // would transform it?

  // Let m be a dilation.
  // Let b be a distance measure on the transformation plane.
  // Let b0 be a projection of b on the view plane.
  // Let b1 be a projection of b on the view plane after the cam translation.
  // Let c be the view plane distance from the camera.
  // Let z0 be the transformation plane distance from the camera.
  //
  // Find vector (xv, yv, zv) that would translate the camera so
  // that the projection b0 would dilate as much as the transformation
  // would scale it.
  //
  // Therefore:
  //   (1) m = b1 / b0
  //   (2) b / z0 = b0 / c <=> b0 = c * b / z0
  //   (3) b / (z0 - zv) = b1 / c <=> b1 = c * b / (z0 - zv)
  //
  // From (1) we get:
  //   b1 = m * b0
  // We substitute b1 and b0 according to (2) and (3) so we get:
  //   c * b / (z0 - zv) = m * c * b / z0
  // Assuming b,c,m != 0:
  //   m / z0 = 1 / (z0 - zv)
  // Which implies:
  //   zv = z0 * (m - 1) / m
  //
  const m = Math.sqrt(helm.a * helm.a + helm.b * helm.b)
  const z0 = origin.z - camera.z

  if (m < EPSILON) {
    // Singular transform that shrinks everything into a point.
    // Camera would need to translate infinitely far back.
    // Best to keep camera still.
    return { a: 1, b: 0, x: 0, y: 0, z: 0 }
  }

  const zv = z0 * (m - 1) / m

  // The camera translation happens towards the origin.
  // Let x0 and y0 be the origin coordinates w.r.t. the camera.
  // Therefore we have xv and yv:
  //   xv / zv = x0 / z0 and yv / zv = y0 / z0
  //  <=> xv = x0 * zv / z0 and yv = y0 * zv / z0
  const x0 = origin.x - camera.x
  const y0 = origin.y - camera.y
  const rz = zv / z0
  const xv = x0 * rz
  const yv = y0 * rz

  // The helm transformation contains also rotation and translation.
  // The rotation is inverted because of the camera point of view.
  // Rotation matrix inversion is equivalent to its transpose.
  const ra = helm.a / m
  const rb = -helm.b / m
  // Translation is scaled as did the dilation. It is also inverted (=negated)
  const dx = -helm.x / m
  const dy = -helm.y / m

  // Add the translations before the result.
  return {
    a: ra,
    b: rb,
    x: xv + dx,
    y: yv + dy,
    z: zv
  }
}
