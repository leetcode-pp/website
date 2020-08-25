const dev = process.env.ENV === 'development'
module.exports = {
  publicPath: dev ? '/' : './',
}
