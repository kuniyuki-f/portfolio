import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import mdx from "@astrojs/mdx";
import rehypePrettyCode from 'rehype-pretty-code';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const prettyCodeOptions = {
  theme: "material-theme-palenight",
  onVisitLine(node) {
    const nodeClass = node.properties.className;
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }];
    }
    if (nodeClass && nodeClass.length > 0) {
      node.properties.className.push('line');
    } else {
      node.properties.className = ['line'];
    }
  },
  onVisitHighlightedLine(node) {
    const nodeClass = node.properties.className;
    if (nodeClass && nodeClass.length > 0) {
      node.properties.className.push('highlighted');
    } else {
      node.properties.className = ['highlighted'];
    }
  },
};


// https://astro.build/config
export default defineConfig({
  site: 'https://kuniyuki-f.github.io',
  base: '/portfolio',
  vite: {
    resolve: {
      alias: {
        '@/': `${path.resolve(__dirname, 'src')}/`
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/assets/scss/colors.scss";
          `
        }
      }
    }
  },
  integrations: [mdx(),],
  markdown: {
    syntaxHighlight: false,
    rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
  }
});