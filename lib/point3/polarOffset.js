const sin = Math.sin
const cos = Math.cos

module.exports = (p, distance, roll, pitch) => {
  // affineplane.point3.polarOffset(p, distance, roll, pitch)
  //
  // Create a point near p at the given distance, roll angle,
  // and pitch angle.
  //
  // Parameters:
  //   p
  //     a point3
  //   distance
  //     a number, the distance from p.
  //   roll
  //     a number, the roll angle in radians.
  //     .. Clockwise rotation, the right-hand rule for z-axis.
  //   pitch
  //     optional number, default 0. The pitch angle in radians.
  //     .. The right-hand rule for x-axis.
  //
  // Return
  //   a point2
  //
  if (!pitch) {
    pitch = 0
  }

  return {
    x: p.x + distance * cos(roll),
    y: p.y + distance * sin(roll) * cos(pitch),
    z: p.z + distance * sin(roll) * sin(pitch)
  }
}
