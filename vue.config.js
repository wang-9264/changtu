module.exports = {
  devServer: {
    overlay: {
      warnings: false,
      errors: false
    },
    proxy: {
      '/middlemobile': {
        target: 'https://apps.changtu.com',
        changeOrigin: true
      },
      // https://mbase.changtu.com/app/queryFloorContents
      'app': {
        target: 'https://mbase.changtu.com',
        changeOrigin: true
      },
      'about': {
        target: 'https://mbase.changtu.com',
        changeOrigin: true
      }
    }
  }
}
