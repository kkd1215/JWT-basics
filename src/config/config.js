const config = {
  host: process.env.HOST || '0.0.0.0',
  port: process.env.PORT || '3000',
  jwtSecret: process.env.JWT_SECRET
}

module.exports = config;