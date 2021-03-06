module.exports = {
    devServer:{
        port: 9000,
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
                target: 'http://172.16.20.81:8080/user',
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
                target: 'http://172.16.20.81:8080',
                changeOrigin: true,
                pathRewrite: {
                    '^/append': ''
                }
            },
            '/merchant':{
                target: 'http://172.16.20.24:8080/merchant',
                changeOrigin: true,
                pathRewrite: {
                    '^/merchant': ''
                }
            },
            '/prd':{
                target: 'http://172.16.20.53:8080',
                changeOrigin: true,
                pathRewrite: {
                    '^/prd': ''
                }
            },
           /* '/cart':{
                target:'http://172.16.20.81:8080/user/cart',
                changeOrigin: true,
                pathRewrite: {
                    '^/cart': ''
                }
            } */  
        }
    }
  }