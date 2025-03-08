import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import { getDNSRecords } from './src/api/dns';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'web4-dns',
      configureServer(server) {
        // Handle Web4 domains in development
        server.middlewares.use(async (req, res, next) => {
          const host = req.headers.host;
          if (!host || !host.match(/\.(web4|everything|future)$/)) {
            return next();
          }

          // Serve the main app for Web4 domains
          const indexHtml = await server.transformIndexHtml(
            req.url || '/',
            fs.readFileSync('index.html', 'utf-8')
          );
          res.setHeader('Content-Type', 'text/html');
          res.end(indexHtml);
        });
      },
      async buildEnd() {
        // Generate DNS records file during build
        const dns = await getDNSRecords();
        if (dns.success) {
          fs.writeFileSync(
            'dist/dns.json',
            JSON.stringify(dns.data, null, 2)
          );
        }
      }
    }
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});