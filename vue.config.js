module.exports = {
    devServer:{
        port: 9000,
        proxy: {
            '/api': {
                target: 'http://172.16.20.53:8080',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
           '/info': {
                target: 'http://172.16.20.53:8080',
                changeOrigin: true,
                pathRewrite: {
                    '^/info': ''
                }
            },
            '/append': {
                target: 'http://localhost:8080',
                changeOrigin: true,
                pathRewrite: {
                    '^/append': ''
                }
            }
            
        }
    }
  }