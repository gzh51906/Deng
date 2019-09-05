module.exports={

    baseUrl: './',
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:2000',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                  '^/api': ''
                }
            }
        }
    }
  }
