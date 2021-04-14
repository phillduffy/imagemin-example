const { resolve } = require("path");
import viteImagemin from "vite-plugin-imagemin";

export default () => {
  return {
    root: resolve(__dirname, "./src"), // "src", // commented out works,
    build: {
      outDir: resolve(__dirname, "./dist"), // "dist", // commented out works,
      emptyOutDir: true,
    },
    plugins: [
      viteImagemin({
        verbose: true,
        gifsicle: {
          optimizationLevel: 3,
          interlaced: false,
        },
        optipng: {
          optimizationLevel: 7,
        },
        webp: {
          quality: 75,
        },
        mozjpeg: {
          quality: 65,
        },
        pngquant: {
          quality: [0.65, 0.9],
          speed: 4,
        },
        svgo: {
          plugins: [
            {
              removeViewBox: false,
            },
            {
              removeEmptyAttrs: false,
            },
          ],
        },
      }),
    ],
  };
};
