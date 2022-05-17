const path = require('path')
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.tsx'),
      name: '@reef/ui-kit',
      fileName: (format) => `main.${format}.js`
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [
        '@fortawesome/fontawesome-svg-core',
        '@fortawesome/free-regular-svg-icons',
        '@fortawesome/free-solid-svg-icons',
        '@fortawesome/react-fontawesome',
        '@polkadot/react-identicon',
        '@types/jest',
        '@types/node',
        '@types/react',
        '@types/react-dom',
        'qrcode.react',
        'react-syntax-highlighter',
        'react-transition-group',
        'react',
        'react-dom'
      ]
    }
  }
})
