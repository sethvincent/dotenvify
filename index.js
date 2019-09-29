const dotenv = require('dotenv')
const envify = require('envify')

module.exports = function dotenvify (file, opts) {
  const { error } = dotenv.config(opts)
  if (error) throw error
  return envify()
}
