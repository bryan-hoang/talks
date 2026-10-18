import antfu from '@antfu/eslint-config';

export default antfu({
  jsonc: false,
  formatters: {
    css: true,
    markdown: true,
    prettierOptions: {
      proseWrap: 'always',
    },
    slidev: {
      files: ['*/src/slides.md'],
    },
  },
  rules: {
    'style/semi': ['error', 'always'],
  },
}).append({
  files: ['*/src/slides.md'],
  rules: {
    'markdown/no-multiple-h1': 'off',
  },
});
