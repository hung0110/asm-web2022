const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        detailProduct: resolve(__dirname, 'detail.html'),
        product: resolve(__dirname, 'product.html')
        
      }
    }
  }
})