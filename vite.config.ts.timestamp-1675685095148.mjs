// vite.config.ts
import { resolve } from "path";
import { defineConfig } from "file:///home/sanzhar/www/relog-vite-template/node_modules/vite/dist/node/index.js";
import react from "file:///home/sanzhar/www/relog-vite-template/node_modules/@vitejs/plugin-react/dist/index.mjs";
import terser from "file:///home/sanzhar/www/relog-vite-template/node_modules/@rollup/plugin-terser/dist/es/index.js";
import { visualizer } from "file:///home/sanzhar/www/relog-vite-template/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
import commonjs from "file:///home/sanzhar/www/relog-vite-template/node_modules/@rollup/plugin-commonjs/dist/es/index.js";
import { nodeResolve } from "file:///home/sanzhar/www/relog-vite-template/node_modules/@rollup/plugin-node-resolve/dist/es/index.js";
var __vite_injected_original_dirname = "/home/sanzhar/www/relog-vite-template";
var vite_config_default = defineConfig({
  plugins: [react()],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__vite_injected_original_dirname, "src/main.tsx"),
      name: "MyLib",
      // the proper extensions will be added
      fileName: "my-lib",
      formats: ["es"]
    },
    minify: "terser",
    rollupOptions: {
      plugins: [nodeResolve(), commonjs(), terser(), visualizer()]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9zYW56aGFyL3d3dy9yZWxvZy12aXRlLXRlbXBsYXRlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9zYW56aGFyL3d3dy9yZWxvZy12aXRlLXRlbXBsYXRlL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3NhbnpoYXIvd3d3L3JlbG9nLXZpdGUtdGVtcGxhdGUvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5pbXBvcnQgdGVyc2VyIGZyb20gJ0Byb2xsdXAvcGx1Z2luLXRlcnNlcic7XG5pbXBvcnQgeyB2aXN1YWxpemVyIH0gZnJvbSAncm9sbHVwLXBsdWdpbi12aXN1YWxpemVyJztcbmltcG9ydCBjb21tb25qcyBmcm9tICdAcm9sbHVwL3BsdWdpbi1jb21tb25qcyc7XG5pbXBvcnQgeyBub2RlUmVzb2x2ZSB9IGZyb20gJ0Byb2xsdXAvcGx1Z2luLW5vZGUtcmVzb2x2ZSc7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICAgIHBsdWdpbnM6IFtyZWFjdCgpXSxcbiAgICBidWlsZDoge1xuICAgICAgICBsaWI6IHtcbiAgICAgICAgICAgIC8vIENvdWxkIGFsc28gYmUgYSBkaWN0aW9uYXJ5IG9yIGFycmF5IG9mIG11bHRpcGxlIGVudHJ5IHBvaW50c1xuICAgICAgICAgICAgZW50cnk6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL21haW4udHN4JyksXG4gICAgICAgICAgICBuYW1lOiAnTXlMaWInLFxuICAgICAgICAgICAgLy8gdGhlIHByb3BlciBleHRlbnNpb25zIHdpbGwgYmUgYWRkZWRcbiAgICAgICAgICAgIGZpbGVOYW1lOiAnbXktbGliJyxcbiAgICAgICAgICAgIGZvcm1hdHM6IFsnZXMnXVxuICAgICAgICB9LFxuICAgICAgICBtaW5pZnk6ICd0ZXJzZXInLFxuICAgICAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAgICAgICBwbHVnaW5zOiBbbm9kZVJlc29sdmUoKSwgY29tbW9uanMoKSwgdGVyc2VyKCksIHZpc3VhbGl6ZXIoKV1cbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFpUyxTQUFTLGVBQWU7QUFDelQsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sWUFBWTtBQUNuQixTQUFTLGtCQUFrQjtBQUMzQixPQUFPLGNBQWM7QUFDckIsU0FBUyxtQkFBbUI7QUFONUIsSUFBTSxtQ0FBbUM7QUFTekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDeEIsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBLEVBQ2pCLE9BQU87QUFBQSxJQUNILEtBQUs7QUFBQTtBQUFBLE1BRUQsT0FBTyxRQUFRLGtDQUFXLGNBQWM7QUFBQSxNQUN4QyxNQUFNO0FBQUE7QUFBQSxNQUVOLFVBQVU7QUFBQSxNQUNWLFNBQVMsQ0FBQyxJQUFJO0FBQUEsSUFDbEI7QUFBQSxJQUNBLFFBQVE7QUFBQSxJQUNSLGVBQWU7QUFBQSxNQUNYLFNBQVMsQ0FBQyxZQUFZLEdBQUcsU0FBUyxHQUFHLE9BQU8sR0FBRyxXQUFXLENBQUM7QUFBQSxJQUMvRDtBQUFBLEVBQ0o7QUFDSixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
