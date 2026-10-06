import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import fs from 'fs'
import path from 'path'

export default defineConfig({
  server: {
    watch: {
      ignored: ['**/*.jpeg', '**/*.jpg', '**/*.png', '**/*.gif', '**/*.webp', '**/node_modules/**', '**/dist/**'],
    },
  },
  plugins: [
    react(),
    {
      name: 'serve-root-images',
      configureServer(server) {
        // Auto-detect and sync any user photo placed in root
        const syncUserPhoto = () => {
          const rootFiles = fs.readdirSync(process.cwd())
          const imageFile = rootFiles.find(f => /^(image|profile|photo|me|avatar).*\.(jpg|jpeg|png|webp|gif)$/i.test(f))
          if (imageFile) {
            const rootPath = path.resolve(process.cwd(), imageFile)
            const publicProfile = path.resolve(process.cwd(), 'public', 'profile.jpg')
            try {
              fs.copyFileSync(rootPath, publicProfile)
            } catch {}
          }
        }
        syncUserPhoto()

        server.middlewares.use((req, res, next) => {
          const match = req.url && req.url.match(/^\/([^/?#]+\.(jpg|jpeg|png|webp|svg|gif))$/i)
          if (match) {
            const fileName = match[1]
            const rootFilePath = path.resolve(process.cwd(), fileName)
            if (fs.existsSync(rootFilePath)) {
              const ext = path.extname(fileName).toLowerCase()
              const mimeTypes = {
                '.jpg': 'image/jpeg',
                '.jpeg': 'image/jpeg',
                '.png': 'image/png',
                '.webp': 'image/webp',
                '.svg': 'image/svg+xml',
                '.gif': 'image/gif',
              }
              res.setHeader('Content-Type', mimeTypes[ext] || 'application/octet-stream')
              fs.createReadStream(rootFilePath).pipe(res)
              return
            }
          }
          next()
        })
      },
      buildStart() {
        const rootFiles = fs.readdirSync(process.cwd())
        const imageFile = rootFiles.find(f => /^(image|profile|photo|me|avatar).*\.(jpg|jpeg|png|webp|gif)$/i.test(f))
        if (imageFile) {
          const rootPath = path.resolve(process.cwd(), imageFile)
          const publicProfile = path.resolve(process.cwd(), 'public', 'profile.jpg')
          try {
            fs.copyFileSync(rootPath, publicProfile)
          } catch {}
        }
      }
    }
  ],
})

