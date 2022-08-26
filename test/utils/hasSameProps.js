module.exports = (a, b) => {
  // Test if two objects have same properties.
  // The property values do not need to be same.
  //
  const ka = Object.keys(a)
  const kb = Object.keys(b)

  // If not same size, exit early
  if (ka.length !== kb.length) {
    return false
  }

  const len = ka.length

  ka.sort()
  kb.sort()

  for (let i = 0; i < len; i += 1) {
    if (ka[i] !== kb[i]) {
      return false
    }
  }

  return true
}
