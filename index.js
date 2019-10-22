const dotenv = require('dotenv')
const envify = require('envify/custom')

module.exports = function dotenvify (env, opts) {
  const { error } = dotenv.config(opts)
  if (error) throw error
  return envify(env)
}
