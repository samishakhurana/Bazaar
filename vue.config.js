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
            '/product':{
                target: 'http://172.16.20.53:8080/product',
                changeOrigin: true,
                pathRewrite: {
                    '^/product': ''
                }
            },
            '/cart':{
                target:'http://localhost:8080/cart',
                changeOrigin: true,
                pathRewrite: {
                    '^/cart': ''
                }
            }
            
            
        }
    }
  }