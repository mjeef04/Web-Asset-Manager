import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  base: "/",
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "@assets": path.resolve(import.meta.dirname, "..", "..", "attached_assets"),
    },
    dedupe: ["react", "react-dom"],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
});
```

## Ce qu'on a supprimé et pourquoi

- ❌ `PORT` obligatoire → inutile pour un build statique sur Vercel
- ❌ `BASE_PATH` obligatoire → remplacé par `/` fixe
- ❌ Les plugins Replit (`runtimeErrorOverlay`, `cartographer`, `devBanner`) → spécifiques à Replit, cassent le build ailleurs
- ❌ `server` et `preview` avec `port` → non nécessaire pour Vercel

## Ensuite dans Vercel

Assure-toi que l'**Output Directory** est bien :
```
artifacts/teranga/dist/public
