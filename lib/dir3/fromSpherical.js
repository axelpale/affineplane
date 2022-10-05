const cos = Math.cos
const sin = Math.sin
const halfPI = Math.PI / 2

module.exports = (theta, phi) => {
  // affineplane.dir3.fromSpherical(theta, phi)
  // affineplane.dir3.create
  //
  // Create a direction in 3D space from two angles.
  // The angles correspond to azimuthal and polar angles in the
  // [spherical coordinates system](
  // https://en.wikipedia.org/wiki/Spherical_coordinate_system)
  // when z-axis is considered the polar axis.
  //
  // Parameters:
  //   theta
  //     a number, an angle in radians around z-axis from positive x-axis.
  //     Gives the direction on xy-plane.
  //     In geographical terms, a longitude when z-axis points the north pole.
  //     In spherical coordinate system, this is often called azimuthal angle.
  //   phi
  //     a number, an angle in radians from the positive z-axis.
  //     The angle π/2 corresponds to a direction perpendicular to z-axis.
  //     In geographical terms, a latitude if measured from the north pole.
  //     In spherical coordinate system, this is often called polar angle.
  //
  // Return
  //   a dir3
  //
  // Examples:
  //   Toward positive x-axis: dir3.fromSpherical(0, π/2)
  //   Toward positive y-axis: dir3.fromSpherical(π/2, π/2)
  //   Toward positive z-axis: dir3.fromSpherical(0, 0)
  //   Toward point (1,1,1): dir3.fromSpherical(π/4, π/4)
  //

  if (typeof phi !== 'number') {
    phi = halfPI
  }

  // Begin with a vector on z-axis: v = (0, 0, 1).
  // Rotate this vector towards positive x-axis by the polar angle phi.
  //
  // Ry, rotation around y:
  //   cos phi   0   sin phi
  //   0           1   0
  //  -sin phi   0   cos phi
  //
  // We get v' = (sin phi, 0, cos phi)
  // As v'.y = 0, the vector is on xz-plane.
  //
  // Then rotate around z by the azimuthal angle theta.
  //
  // Rz, rotation around z:
  //   cos theta  -sin theta   0
  //   sin theta   cos theta   0
  //   0           0           1
  //
  // We get v'' = (cos theta * sin phi, sin theta * sin phi, cos phi)
  // This is our unit vector that describes direction.
  //

  return {
    x: cos(theta) * sin(phi),
    y: sin(theta) * sin(phi),
    z: cos(phi)
  }
}
