const pjson = require('../../package.json')
const unit = require('../../index')

module.exports = (t) => {
  t.equal(unit.version, pjson.version, 'version match')
  t.end()
}
