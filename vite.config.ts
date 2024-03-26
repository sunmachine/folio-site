import { defineConfig } from "vite";

function htmlPlugin() {
  return {
    name: "html-import-plugin",
    transform(content: unknown, id: string) {
      if (id.endsWith(".html")) {
        // Convert HTML to a JavaScript string export
        return `export default ${JSON.stringify(content)}`;
      }
    },
  };
}

export default defineConfig({
  plugins: [htmlPlugin()],
});
