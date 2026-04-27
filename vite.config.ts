import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import type { IncomingMessage } from "http";

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'admin-static',
      configureServer(server) {
        server.middlewares.use((req: IncomingMessage, _res, next) => {
          const url = req.url ?? '';
          if (url === '/admin' || url === '/admin/') {
            req.url = '/admin/index.html';
          }
          next();
        });
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
