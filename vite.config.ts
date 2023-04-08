import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsConfigPaths from 'vite-tsconfig-paths'
import "dotenv/config"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsConfigPaths()],
  define:{
    
  }
})