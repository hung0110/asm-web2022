// vite.config.js
const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        detail: resolve(__dirname, 'detail.html'),
        products: resolve(__dirname, 'products.html'),
        asm: resolve(__dirname, 'asm.html'),
        asm2: resolve(__dirname, 'asm2.html'),
        asm3: resolve(__dirname, 'asm3.html'),
        asm4: resolve(__dirname, 'asm4.html'),
      }
    }
  }
})