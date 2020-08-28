const isDev = process.env.ENV === 'development'
module.exports = {
  publicPath: isDev ? '/' : './',
}
