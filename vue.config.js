module.exports = {
    devServer:{
        proxy: {
            '/api': {
                target: 'http://172.16.20.53:8080',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                },
            },
            '/rest': {
                target: 'http://172.16.20.70:8080/rest',
                changeOrigin: true,
                pathRewrite: {
                    '^/rest': ''
                }
            },
            '/user':{
                target: 'http://localhost:8080/user',
                changeOrigin: true,
                pathRewrite: {
                    '^/user': ''
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