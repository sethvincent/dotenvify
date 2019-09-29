const dotenv = require('dotenv')
const envify = require('envify')

module.exports = function dotenvify (env, opts) {
  const { error } = dotenv.config(opts)
  if (error) throw error
  return envify(env)
}
