const dotenv = require('dotenv')
const envify = require('envify/custom')

module.exports = function dotenvify (file, opts) {
  const { error } = dotenv.config(opts)
  if (error) throw error
  const transform = envify(process.env)
  return transform(file, opts)
}
