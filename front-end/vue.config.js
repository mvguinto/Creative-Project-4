module.exports = {
  devServer: {
    proxy: 'http://localhost:3001',
    watchOptions: {
      ignored: /images/
    }
  }
}
