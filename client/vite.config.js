import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 6004,
    host: true,
    allowedHosts: true,

    proxy: {
      '/api': {
        target: 'http://localhost:6005',
        changeOrigin: true,
        secure: false,
      },
      '/upload': {
        target: 'http://localhost:6005',
        changeOrigin: true,
        secure: false,
      },
      '/agentError': {
        target: 'http://localhost:6005',
        changeOrigin: true,
        secure: false,
      },
      '/notfound': {
        target: 'http://localhost:6005',
        changeOrigin: true,
        secure: false,
      },
      '/excutedSucess': {
        target: 'http://localhost:6005',
        changeOrigin: true,
        secure: false,
      },
      '/executedSuccess': {
        target: 'http://localhost:6005',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
