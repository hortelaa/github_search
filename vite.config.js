import { defineConfig } from 'vite'
import { fileURLToPath, URL } from "url"
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  //Adicionando um @ para definir o path da src
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
    ],
  },
})
