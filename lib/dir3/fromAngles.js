const cos = Math.cos
const sin = Math.sin

module.exports = (roll, pitch, yawn) => {
  // affineplane.dir3.create(roll[, pitch[, yawn]])
  // affineplane.dir3.fromAngles
  //
  // Create a direction from the roll, pitch, and yawn angles
  // when applied in this order (z-x-y) to a unit vector along positive x-axis.
  // Roll means rotation around z-axis of the reference frame.
  // Pitch means rotation around x-axis of the reference frame.
  // Yawn means rotation around y-axis of the reference frame.
  // The rotations are [exsintric](https://en.wikipedia.org/wiki/Euler_angles)
  // which means that if the unit vector were an airplane, the rotations
  // would be relative to the airport and not relative to the airplane itself.
  //
  // Angles outside ]-π,π] are mapped within the limits with modulus operators.
  //
  // Parameters:
  //   roll
  //     a number
  //   pitch
  //     optional number, defaults to 0.
  //   yawn
  //     optional number, defaults to 0.
  //
  // Return
  //   a dir3
  //

  if (!pitch) {
    pitch = 0
  }
  if (!yawn) {
    yawn = 0
  }

  // Rz, rotation around z:
  //   cos roll  -sin roll   0
  //   sin roll   cos roll   0
  //   0          0          1
  //
  // Rx, rotation around x:
  //   1   0           0
  //   0   cos pitch  -sin pitch
  //   0   sin pitch   cos pitch
  //
  // Ry, rotation around y:
  //   cos yawn   0   sin yawn
  //   0          1   0
  //  -sin yawn   0   cos yawn
  //
  // When Rz is applied to u=[1,0,0]' where ' stands for transpose:
  //   Rz*u = [cos roll, sin roll, 0]'
  // Then Rx:
  //   Rx*Rz*u = [cos roll, cos pitch * sin roll, sin pitch * sin roll]
  // Let us simplify notation by cr, cp, sr, sp:
  //   Rx*Rz*u = [cr, cp*sr, sp*sr]
  // Then Ry, with cy = cos yawn etc:
  //   Ry*Rx*Rz*u = [cy*cr + sy*sp*sr, cp*sr, -sy*cr + cy*sp*sr]
  //

  const cr = cos(roll)
  const cp = cos(pitch)
  const cy = cos(yawn)
  const sr = sin(roll)
  const sp = sin(pitch)
  const sy = sin(yawn)

  return {
    x: cr * cy + sr * sp * sy,
    y: cp * sr,
    z: cr * (-sy) + cy * sp * sr
  }
}
