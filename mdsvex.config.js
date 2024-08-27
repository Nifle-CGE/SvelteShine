import rehypeSlug from 'rehype-slug';
import remarkCodeTitles from 'remark-flexible-code-titles';
import highlighter from './src/lib/codeHighlighter.js';
import rehypeKatexSvelte from 'rehype-katex-svelte';
import remarkMath from 'remark-math';
import remarkAttr from 'remark-attr';

// rehypeSlug is used to add IDs to headings
// remarkUnwrapImages is used to remove the wrapping <p> tag around images
// remarkCodeTitles is used to add titles to code blocks
const config = {
  extensions: ['.md', '.svx', '.mdx'],
  remarkPlugins: [remarkMath, remarkAttr, remarkCodeTitles],
  rehypePlugins: [rehypeKatexSvelte, rehypeSlug],
  highlight: {
    highlighter
  },
  layout: './src/lib/components/markdown/blueprint.svelte'
};

export default config;
