import { defineConfig } from "vite";

export default defineConfig({
    // Project name: basic-vite-setup
    root: "src",

    // Base public path
    base: "/",

    // Development server configuration
    server: {
        port: 3000,
        host: true,
        strictPort: true,
        open: true
    },

    // Build configuration
    build: {
        outDir: "../dist",
        emptyOutDir: true
    }
});