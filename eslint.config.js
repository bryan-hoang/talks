import antfu from '@antfu/eslint-config';

export default antfu({
  jsonc: false,
  formatters: {
    css: false,
    markdown: 'prettier',
    prettierOptions: {
      proseWrap: 'always',
    },
    slidev: {
      // Oxfmt collapses per-slide YAML frontmatter into a single line.
      files: ['*/src/slides.md'],
    },
  },
  yaml: {
    overrides: {
      'yml/block-mapping-question-indicator-newline': 'off',
      'yml/block-sequence-hyphen-indicator-newline': 'off',
      'yml/flow-mapping-curly-newline': 'off',
      'yml/flow-mapping-curly-spacing': 'off',
      'yml/flow-sequence-bracket-newline': 'off',
      'yml/flow-sequence-bracket-spacing': 'off',
      'yml/indent': 'off',
      'yml/key-spacing': 'off',
      'yml/no-multiple-empty-lines': 'off',
      'yml/no-tab-indent': 'off',
      'yml/quotes': 'off',
      'yml/spaced-comment': 'off',
    },
  },
  toml: {
    overrides: {
      'toml/array-bracket-newline': 'off',
      'toml/array-bracket-spacing': 'off',
      'toml/array-element-newline': 'off',
      'toml/comma-style': 'off',
      'toml/indent': 'off',
      'toml/inline-table-curly-spacing': 'off',
      'toml/key-spacing': 'off',
      'toml/padding-line-between-pairs': 'off',
      'toml/padding-line-between-tables': 'off',
      'toml/quoted-keys': 'off',
      'toml/spaced-comment': 'off',
      'toml/table-bracket-spacing': 'off',
    },
  },
  pnpm: {
    stylistic: false,
  },
  rules: {
    'style/semi': ['error', 'always'],
  },
})
  .append({
    files: ['*/src/slides.md'],
    rules: {
      'markdown/no-multiple-h1': 'off',
    },
  })
  .append({
    files: ['**/*.md'],
    ignores: ['**/src/slides.md'],
    rules: {
      'format/prettier': 'off',
    },
  });
