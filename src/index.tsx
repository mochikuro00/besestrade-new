import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'
import { cors } from 'hono/cors'

const app = new Hono()

app.use('/*', cors())

// API Routes
app.post('/api/contact', async (c) => {
  // In a real app, this would send an email or store to DB
  return c.json({ success: true, message: 'Message received' })
})

// Serve static assets from build output
app.use('/*', serveStatic({ root: './dist' }))

// Fallback for SPA routing - returns index.html for unknown routes
app.get('*', serveStatic({ path: './dist/index.html' }))

export default app
