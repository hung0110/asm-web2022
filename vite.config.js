const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, ''),
        detailProduct: resolve(__dirname, 'detail.html'),
        product: resolve(__dirname, 'products.html'),
        homee: resolve(__dirname, 'home.html')
      }
    }
  }
})