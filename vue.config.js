module.exports = {
    devServer:{
    
        proxy: {
            '/api': {
                target: 'http://172.16.20.53:8080',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
            
        }
    }
  }