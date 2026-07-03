import { defineConfig } from 'vite';

export default defineConfig({
  base: "/Header-Spa-Beauty", 

  server: {
    host: true, // permite acceder desde otros dispositivos de la red
    watch: {
      usePolling: true, // recomendado en WSL para detectar cambios
    },
  },
});
