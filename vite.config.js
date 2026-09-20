import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// Local development plugin to emulate Vercel Serverless Function (/api/contact)
function localApiPlugin() {
  return {
    name: 'local-api-plugin',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url === '/api/contact' && req.method === 'POST') {
          try {
            const buffers = []
            for await (const chunk of req) {
              buffers.push(chunk)
            }
            const rawBody = Buffer.concat(buffers).toString()
            req.body = rawBody ? JSON.parse(rawBody) : {}

            const env = loadEnv(process.env.NODE_ENV || 'development', process.cwd(), '')
            process.env.MY_EMAIL = process.env.MY_EMAIL || env.MY_EMAIL
            process.env.RESEND_API_KEY = process.env.RESEND_API_KEY || env.RESEND_API_KEY

            const { default: handler } = await import('./api/contact.js')

            const vercelRes = {
              setHeader(key, val) {
                res.setHeader(key, val)
              },
              status(code) {
                res.statusCode = code
                return this
              },
              json(payload) {
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify(payload))
              },
              end(payload) {
                res.end(payload)
              }
            }

            await handler(req, vercelRes)
          } catch (err) {
            console.error('Local API Serverless Error:', err)
            res.statusCode = 500
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ success: false, message: err.message }))
          }
        } else {
          next()
        }
      })
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), localApiPlugin()],
})
