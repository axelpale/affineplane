const atan2 = Math.atan2
const acos = Math.acos

module.exports = (dir) => {
  // @affineplane.dir3.toSpherical(dir)
  //
  // Get theta and phi angles of spherical coordinate system for
  // the given direction.
  // The two angles are unique for all directions.
  // The function is compatible with affineplane.dir3.fromSpherical
  //
  // Parameters:
  //   dir
  //     a dir3 object or unit vec3.
  //
  // Return
  //   an object with properties
  //     theta
  //       a number, an angle in radians on the xy-plane when
  //       measured from positive x-axis and around z-axis.
  //       In geographical terms, if z-axis points the north pole, a longitude.
  //       In spherical coordinate system, this is often called azimuthal angle.
  //     phi
  //       a number, an angle in radians from the positive z-axis.
  //       In geographical terms, a latitude if measured from the north pole.
  //       In spherical coordinate system, this is often called the polar angle.
  //

  // We get theta directly from x and y coordinates.
  const theta = atan2(dir.y, dir.x)
  // We get phi directly from z coordinate as we know it is the unit vector.
  const phi = acos(dir.z)

  return { theta, phi }
}
