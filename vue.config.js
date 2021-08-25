module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
      ? '/production-sub-path/'
      : '/',
  devServer: {
    open: true,
    host: 'localhost',
    port: 8080,
    https: false,
    proxy: {
      '/': {
        target: 'http://localhost:3000',
        changOrigin: true,
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
